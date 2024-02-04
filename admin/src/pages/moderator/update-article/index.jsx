import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LayoutMod from '../../../components/mod/LayoutMod'
import Input from '../../../components/common/Input'
import { useEffect, useState } from 'react'
import API from '../../../utils/api-client'
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material'
import './style.css'

const ArticleView = ({ article }) => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isApproveLoading, setIsApproveLoading] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            title: article?.title,
            authors: article?.authors.join(', '),
            institutions: article?.institutions.join(', '),
            keywords: article?.keywords.join(', '),
            content: article?.content,
            resume: article?.resume,
            references: article?.references.join('; '),
        }
    })

    const onSubmit = async (data) => {
        const req = {
            ...data,
            authors: data.authors.trim().split(','),
            institutions: data.institutions.trim().split(','),
            keywords: data.keywords.trim().split(','),
            references: data.references.trim().split(';'),
        }
        try {
            setIsLoading(true);
            const res = await API.put(`elasticsearch/update_article/${article?.id}/`, {
                ...req
            });
            toast.success(res?.data?.message, {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
            navigate('/moderator/gerer-article');
        } catch (error) {
            toast.error(error?.response?.data?.detail ?? 'Error', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const onApprove = async () => {
        try {
            setIsApproveLoading(true);
            const res = await API.post(`paperhub/moderator/approve_article/${article?.id}/`);
            if (res.status === 200) {
                toast.success(res?.data?.detail, {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
                navigate('/moderator/gerer-article');
            } else {
                toast.error(res?.response?.data?.detail, {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            toast.error(error?.response?.data?.detail ?? 'Error when approving the article', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsApproveLoading(false);
        }
    }

    const titleRegister = register('title', {
        required: {
            value: true,
            message: 'Field is required to proceed'
        },
        minLength: {
            value: 3,
            message: 'Field must contain at least three characters'
        },
    })

    const commaSeparatedRegister = (attribute) => register(attribute, {
        required: {
            value: true,
            message: 'Field is required to proceed'
        },
    })

    return (
        <>
            <h1 className='text-3xl font-bold text-Pgreen'>MAJ article:</h1>
            <form className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={"Nom d'article"}
                    placeholder={'Eg: Machine learning algorithms'}
                    attribute={'title'}
                    register={titleRegister}
                    errors={errors}
                />
                <Input
                    labelTitle={"Auteurs d'article"}
                    placeholder={'Eg: Arab, Allaoua, Boubenia (separate with ",")'}
                    attribute={'authors'}
                    register={commaSeparatedRegister('authors')}
                    errors={errors}
                />
                <Input
                    labelTitle={"Intritutions d'article"}
                    placeholder={'Eg: ESI Algiers, ESI SBA, ESTIN (separate with ",")'}
                    attribute={'institutions'}
                    register={commaSeparatedRegister('institutions')}
                    errors={errors}
                />
                <Input
                    labelTitle={"Keywords"}
                    placeholder={'Eg: CICD, UML, IGL (separate with ",")'}
                    attribute={'keywords'}
                    register={commaSeparatedRegister('keywords')}
                    errors={errors}
                />
                <Input
                    labelTitle={"Resume"}
                    placeholder={'Eg: Lorem ipsum dolor sit amet consectetur...'}
                    attribute={'resume'}
                    register={commaSeparatedRegister('resume')}
                    errors={errors}
                    textArea={true}
                />
                <Input
                    labelTitle={"Content"}
                    placeholder={'Eg: lougga ipsum dolor sit amet consectetur...'}
                    attribute={'content'}
                    register={commaSeparatedRegister('content')}
                    errors={errors}
                    textArea={true}
                />
                <Input
                    labelTitle={"Refrences"}
                    placeholder={'Eg: CEUR Workshop Proceedings, 2017; UML; Mr BATATA Course 2024 (separate with ";")'}
                    attribute={'references'}
                    register={commaSeparatedRegister('references')}
                    errors={errors}
                />
                <div className='flex gap-x-4 gap-y-1 items-center flex-wrap'>
                    <Link to='/moderator/gerer-article' className='mt-3 shadow-lg bg-Pred hover:bg-[#800030] transition-all text-white rounded-2xl px-4 pt-2 pb-3 font-bold text-lg'>Annuler</Link>
                    <button type='submit' onClick={handleSubmit(onSubmit)} className='flex items-center justify-center mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl px-8 pt-2 pb-3 font-bold text-lg min-w-[248px]' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Appliquer changment'}</button>
                </div>
            </form>
            {!article?.approved && <button type='button' onClick={onApprove} className='flex items-center w-fit justify-center mt-3 shadow-lg bg-[#252A3A] hover:bg-[#252A3D] transition-all text-white rounded-2xl px-4 pt-2 pb-3 font-bold text-lg min-w-[170px]' disabled={isApproveLoading}>{isApproveLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Approver article'}</button>}
        </>
    )
}

const UpdateArticle = () => {
    
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const currentArticle = async () => {            
            try {
                setIsLoading(true);
    
                const res = await API.get(`elasticsearch/get_articles_mod_id/${id}/`)
                setArticle(res.data)
    
                toast.success('Article founded successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } catch (error) {
                toast.error(error?.response?.data?.detail ?? 'Error', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } finally {
                setIsLoading(false);
            }
        }

        currentArticle()
    }, [])


    return (
        <LayoutMod isLoading={isLoading}>
            <ArticleView article={article} />
        </LayoutMod>
    )
}

export default UpdateArticle