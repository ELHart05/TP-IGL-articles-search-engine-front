import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const ArticleAuthor = ({ name, institution }) => {
  return (
    <div className='flex gap-2 items-center transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <div className='flex flex-col font-bold'>
        <h5 className='text-lg'>{name}</h5>
        <span className='text-md'>{institution}</span>
      </div>
    </div>
  )
}

const Keyword = ({ name, link }) => {
  return (
    <Link to={link} className='flex items-center gap-2 transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <span className='font-bold text-md'>{name}</span>
    </Link>
  )
}

const Refrence = ({ name, link }) => {
  return (
    <Link to={link} className='flex items-center gap-2 transition-all hover:translate-y-1'>
      <img src="/images/ellipse-red.svg" alt="Ellipse" />
      <span className='font-bold text-md'>{name}</span>
    </Link>
  )
}

const authors = [
  {
    name: 'Author1',
    institution: 'Institution'
  },
  {
    name: 'Author2',
    institution: 'Institution'
  },
  {
    name: 'Author3',
    institution: 'Institution'
  },
  {
    name: 'Author4',
    institution: 'Institution'
  },
]

const references = [
  {
    name: 'Reference1',
    link: '#'
  },
  {
    name: 'Reference2',
    link: '#'
  },
  {
    name: 'Reference3',
    link: '#'
  },
  {
    name: 'Reference4',
    link: '#'
  },
  {
    name: 'Reference5',
    link: '#'
  },
]

const keywords = [
  {
    name: 'Keyword1',
    link: '#'
  },
  {
    name: 'Keyword2',
    link: '#'
  },
  {
    name: 'Keyword3',
    link: '#'
  },
  {
    name: 'Keyword4',
    link: '#'
  },
  {
    name: 'Keyword5',
    link: '#'
  },
]

const paragraphes = [
  "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS.",
  "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS.",
  "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS.",
  "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS."
]

const ArticleDetails = () => {
  return (
    <Layout isLoading={false}>
      <div className='flex flex-col w-full items-center justify-center gap-4 px-5 py-9 md:p-9'>
        <div className='bg-white w-full py-6 pr-4 flex flex-col items-center gap-6 rounded-xl shadow-xl'>
          <div className='flex flex-col items-center justify-center gap-4 pl-4'>
            <h3 className='text-3xl font-bold'>Tailwind updates</h3>
            <div className='border-b-Pred border-b-4 w-full max-w-[800px]'></div>
          </div>
          <div className='w-full overflow-x-scroll flex gap-16 px-1 md:px-4 mt-5 ml-4 scrollbar-hide'>
            {
              authors.map((author, index) => (
                <ArticleAuthor {...author} key={index} />
              ))
            }
          </div>
          <div className='w-full flex flex-col md:flex-row mt-4'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 pl-4 md:pl-0'>
              <div className='w-full bg-Pred text-white px-6 py-4 sm:text-justify md:px-10 md:py-6'>
                <h5 className='text-center font-bold text-xl w-full mb-3'>Resume</h5>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS.</p>
              </div>
              <div className='w-full pl-4'>
                <h6 className='font-bold text-lg ml-4'>Keywords:</h6>
                <div className='flex mt-4 gap-10 overflow-x-scroll w-full pb-3 scrollbar-hide'>
                  {
                    keywords.map((keyword, index) => (
                      <Keyword {...keyword} key={index} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-4 items-center px-5 md:px-10 lg:px-20 py-6'>
              <h5 className='text-center font-bold text-xl w-full'>Introduction</h5>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is an updated and refined documentation, providing clearer insights into the framework's features and implementations. Furthermore, community contributions play a significant role, enriching Tailwind CSS with user-driven suggestions and collaborative improvements. Collectively, these updates endeavor to elevate the development experience by empowering users to craft more efficient, visually striking, and customizable web applications through Tailwind CSS.</p>
            </div>
          </div>
          <div className='flex flex-col gap-10 items-center ml-4 sm:px-4 md:px-16 pb-4 md:pb-10'>
            {
              paragraphes.map((paragraph, index) => (
                <p className='sm:text-justify' key={index}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{paragraph}
                </p>
              ))
            }
          </div>
          <div className='ml-4 border-b-Pred border-b-4 w-full max-w-[800px]'></div>
          <div className='w-full ml-4'>
            <h6 className='font-bold text-lg ml-4'>Refrences:</h6>
            <div className='flex mt-4 gap-10 overflow-x-scroll md:px-6 w-full pb-3 scrollbar-hide'>
              {
                references.map((reference, index) => (
                  <Refrence {...reference} key={index} />
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
            <button className='flex gap-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full'>
              <img src="/images/download.svg" alt="Download" />
              PDF version
            </button>
            <div className='cursor-pointer transition-all flex hover:translate-y-1'>
              <img className='h-10 w-10' src="/images/Home/ArticlesList/favorite-off.svg" alt="Heart" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleDetails