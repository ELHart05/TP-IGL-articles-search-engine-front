// import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { articlesList } from '../gerer-article'
import LayoutMod from '../../../components/mod/LayoutMod'
import Input from '../../../components/common/Input'
import './style.css'

const ArticleView = ({ mod }) => {

    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            title: '' ?? mod.title,
            authors: '' ?? mod.authors.join(', '),
            institutions: '' ?? mod.institutions.join(', '),
            keywords: '' ?? mod.keywords.join(', '),
            abstract: '' ?? mod.abstract,
            text: '' ?? mod.text,
            references: '' ?? mod.references.join('; '),
        }
    })

    const onSubmit = (data) => {
        //TODO/ handle update article logic
        const req = {
            ...data,
            authors: authors.trim().split(','),
            institutions: institutions.trim().split(','),
            keywords: keywords.trim().split(','),
            references: references.trim().split(';'),
        }
        console.log(req)
    }

    const onApprove = (data) => {
        //TODO/ handle approve article logic
        console.log(data)
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
                    labelTitle={"Abstract"}
                    placeholder={'Eg: Lorem ipsum dolor sit amet consectetur...'}
                    attribute={'abstract'}
                    register={commaSeparatedRegister('abstract')}
                    errors={errors}
                    textArea={true}
                />
                <Input
                    labelTitle={"Text"}
                    placeholder={'Eg: lougga ipsum dolor sit amet consectetur...'}
                    attribute={'text'}
                    register={commaSeparatedRegister('text')}
                    errors={errors}
                    textArea={true}
                />
                <Input
                    labelTitle={"References"}
                    placeholder={'Eg: CEUR Workshop Proceedings, 2017; UML; Mr BATATA Course 2024 (separate with ";")'}
                    attribute={'references'}
                    register={commaSeparatedRegister('references')}
                    errors={errors}
                />
                <div className='flex gap-x-4 gap-y-1 items-center flex-wrap'>
                    <Link to='/moderator/gerer-article' className='mt-3 shadow-lg bg-Pred hover:bg-[#800030] transition-all text-white rounded-2xl px-4 pt-2 pb-3 font-bold text-lg'>Annuler</Link>
                    <button onClick={handleSubmit(onSubmit)} className='mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl px-4 pt-2 pb-3 font-bold text-lg'>Appliquer changment</button>
                    <button onClick={handleSubmit(onApprove)} className='mt-3 shadow-lg bg-[#252A3A] hover:bg-[#252A3D] transition-all text-white rounded-2xl px-4 pt-2 pb-3 font-bold text-lg'>Approver article</button>
                </div>
            </form>
        </>
    )
}

const UpdateArticle = () => {
    
    const { id } = useParams();
    // const [isLoading, setIsLoading] = useState(false);
    // setInterval(() => {
    //     setIsLoading(false)
    // }, 5000)
    //this is just an example of loading

    const mod = articlesList.find((mod) => (
        mod.id == id
    ));

    return (
        <LayoutMod isLoading={false ?? isLoading}>
            <ArticleView mod={mod} />
        </LayoutMod>
    )
}

export default UpdateArticle