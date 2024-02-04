import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import API from '../../utils/api-client'
import { toast } from 'react-toastify';
import isValidUser from '../../utils/isValidUser';
import Spinner from 'react-spinner-material';


const ArticleAuthor = ({ name, index }) => {
  return (
    <div className='flex gap-2 items-center transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <div className='flex flex-col font-bold'>
        <span className='text-md'>Author{index+1}</span>
        <h5 className='text-lg'>{name}</h5>
      </div>
    </div>
  )
}

const ArticleInstitution = ({ name, index }) => {
  return (
    <div className='flex gap-2 items-center transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <div className='flex flex-col font-bold'>
        <span className='text-md'>Institution{index+1}</span>
        <h5 className='text-lg'>{name}</h5>
      </div>
    </div>
  )
}

const Keyword = ({ name }) => {
  return (
    <div className='flex items-center gap-2 transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <span className='font-bold text-md'>{name}</span>
    </div>
  )
}

const Refrence = ({ name }) => {
  return (
    <div className='flex items-center gap-2 transition-all hover:translate-y-1 max-w-[350px]'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <span className='font-bold text-md'>{name}</span>
    </div>
  )
}

const ArticleDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const user = isValidUser();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const getArticleDetails = async () => {
      try {
        const res = await API.get(`elasticsearch/get_article_id/${id}/`);
        console.log(res.data)
        setArticle(res.data);

        toast.success('Article loaded successfully!', {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        })
      } catch (error) {
        toast.error(error?.response?.data?.error ?? 'Error', {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        })
        navigate('/search')
      } finally {
        setIsLoading(false);
      }
    }
    getArticleDetails()
  }, [])

  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);
  const addToFavorite = async () => {
    try {
      setIsFavoriteLoading(true)

        await API.post(`paperhub/user/favorite/${user.id}/${id}/`)
    
        toast.success('Added to favorite!', {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        })

    } catch (error) {
        toast.error('Something went wrong, try again!', {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        })
    } finally {
      setIsFavoriteLoading(false)
    }
  }
  
  return (
    <Layout isLoading={isLoading}>
      <div className='flex flex-col w-full items-center justify-center gap-4 px-5 py-9 md:p-9'>
        <div className='bg-white w-full py-6 pr-4 flex flex-col items-center gap-6 rounded-xl shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-4 pl-4'>
            <h3 className='text-3xl font-bold text-center'>{article?.title}</h3>
            <div className='border-b-Pred border-b-4 w-full max-w-[800px]'></div>
          </div>
          <div className='w-full overflow-x-scroll flex gap-16 px-1 md:px-4 mt-5 ml-4 scrollbar-hide'>
            {
              article?.authors.map((author, index) => (
                <ArticleAuthor name={author} index={index} key={index} />
              ))
            }
          </div>
          <div className='w-full overflow-x-scroll flex gap-16 px-1 md:px-4 mt-5 ml-4 scrollbar-hide'>
            {
              article?.institutions.map((institution, index) => (
                <ArticleInstitution name={institution} index={index} key={index} />
              ))
            }
          </div>
          <div className='w-full flex flex-col md:flex-row mt-4'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 pl-4 md:pl-0'>
              <div className='w-full bg-Pred text-white px-6 py-4 sm:text-justify md:px-10 md:py-6'>
                <h5 className='text-center font-bold text-xl w-full mb-3'>Resume</h5>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{article?.resume}.</p>
              </div>
              <div className='w-full pl-4'>
                <h6 className='font-bold text-lg ml-4'>Keywords:</h6>
                <div className='flex mt-4 gap-10 overflow-x-scroll w-full pb-3 scrollbar-hide'>
                  {
                    article?.keywords.map((keyword, index) => (
                      <Keyword name={keyword} key={index} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-4 items-center px-5 md:px-10 lg:px-20 py-6'>
              <h5 className='text-center font-bold text-xl w-full'>Introduction</h5>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{article?.content.slice(0, 1250)}...</p>
            </div>
          </div>
          <div className='flex flex-col gap-10 items-center ml-4 sm:px-4 md:px-16 pb-4 md:pb-10'>
            <p className='sm:text-justify'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{article?.content}
            </p>
          </div>
          <div className='ml-4 border-b-Pred border-b-4 w-full max-w-[800px]'></div>
          <div className='w-full ml-4'>
            <h6 className='font-bold text-lg ml-4'>Refrences:</h6>
            <div className='flex mt-4 gap-10 overflow-x-scroll md:px-6 w-full pb-3 scrollbar-hide'>
              {
                article?.refrences.map((reference, index) => (
                  <Refrence name={reference} key={index} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between px-4 w-full'>
          <Link to='/search' className='cursor-pointer transition-all flex hover:translate-y-1'>
            <img src="/images/arrow-left.svg" alt="Arrow" />
          </Link>
          <div className='flex items-center gap-6'>
            <Link to={article?.urlPDF} className='flex gap-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full'>
              <img src="/images/download.svg" alt="Download" />
              PDF version
            </Link>
            <div className='cursor-pointer transition-all flex hover:translate-y-1' onClick={addToFavorite}>
              {
                isFavoriteLoading
                ?
                <Spinner style={{height: '24px', width: '24px'}} />
                :
                <img className='h-10 w-10' src="/images/Home/ArticlesList/favorite-off.svg" alt="Heart" />
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleDetails