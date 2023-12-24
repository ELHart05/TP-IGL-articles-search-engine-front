
import { useState } from 'react';
import Arrow from '/images/articleDetails/back-arrow.svg';
import Download from '/images/articleDetails/download.svg';
import Layout from '../../components/Layout';

const article = {
  title: "Sample Article Title",
  authors: [
    {
      name: "Author 1",
      institution: "Institution A",
    },
    {
      name: "Author 2",
      institution: "Institution B",
    },
    {
      name: "Author 3",
      institution: "Institution C",
    },
  ],
  summary: "This is a summary of the article.",
  keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
  introduction: "This is the introduction of the article.",
  mainContent: "This is the main content of the article.",
  conclusion: "This is the conclusion of the article.",
  resources: [
    {
      title: "Resource 1",
      link: "https://example.com/resource1",
    },
    {
      title: "Resource 2",
      link: "https://example.com/resource2",
    },
    
  ],
};

function ArticleDeatils() {
  const [isBlack, setIsBlack] = useState(false);

  const handleColorChange = () => {
    setIsBlack(!isBlack); 
  };
  return (
    <Layout isLoading={false}>
      <div className='bg-background '>

    
        <div className='font-main flex flex-col justify-center items-center mt-16 mb-4' >
        
          <div className="bg-white w-95  rounded-lg   pt-8 ">
            <div className='flex  flex-col items-center'>
            <h1 className='text-20 font-bold  pb-4  '>
            {article.title}
        </h1>
        <div class="w-1/3 h-1  bg-blue"></div>
            </div>
        



        <div className='flex flex-col p-10 2sm:flex-row'>
        {article.authors.map((author, index) => (
    <div className='flex items-center pr-4 pl-4' key={index}>
      <div className="w-15 h-15 rounded-full bg-second"></div>
      <div className='pl-2'>
        <h5 className='font-semibold '>{author.name}</h5>
        <h5>{author.institution}</h5>
      </div>
    </div>
  ))}
        </div>
      
    
    <div className=' flex w-95 justify-between '>

  <div className='flex flex-col w-50'>
  <div className='bg-main  text-white p-8  flex  flex-col items-center' >
  <h2 className='text-20 font-semibold'>Sammary</h2>
  <p>{article.summary}</p>

  </div>

  <div className='p-2' >
  <h2 className='text-20 font-semibold'>Keywords</h2>
  <div className='flex flex-col 2sm:flex-row w-100'>
    {article.keywords.map((word,index)=>(
      <div className='flex items-center pr-8'>
        <div className='w-15 h-15 rounded-full bg-blue '></div>
      <h6 className='pl-2'>  {word}</h6>
      </div>

    ))}
  </div>
  </div>

  </div>






  <div className=' flex w-50 flex-col items-center '>
  <h2 className='text-20 font-semibold'>Introduction</h2>
  <p> {article.introduction}</p>
  </div>

    </div>



  <p className='p-8'>
  {article.mainContent}
  </p>
        <div className='p-8'>
          <h2 className=' text-20 font-semibold'> Conclusion</h2>
          <p>
            {article.conclusion}
          </p>
          </div> 
      <div className='flex  flex-col items-center'>
      <div className='w-1/3 h-1  bg-second ' ></div>
      </div>
          

          <div className='p-2'>
            <h2 className='text-20 font-semibold'>Refrences</h2>
                            
            {article.resources.map((word,index)=>(
              <div className='flex items-center'>
        <div className='w-15 h-15 rounded-full bg-second '></div>
      <div className='flex flex-col items-start  pr-8 2sm:flex-row'>
        
      <h6 className='pl-2'>  {word.title} </h6>
      <h6 className='pl-2'>  {word.link} </h6>

      </div>
              </div>
            

    ))}
          </div>


        </div>

        <div className='flex justify-between text-white w-95 pt-8'>
        <img className='h-30 w-30' src={Arrow}   />

        <div className='flex items-center'>
        <button className='w-150 h-50 bg-second rounded-15 mr-8 flex flex-col items-center justify-center hover:bg-main'>
          
              <div className='flex items-center'>
                <h6 className='font-semibold pr-2'>        Pdf Version</h6>
                <img className='h-15 w-15' src={Download}  />
              </div>
          
          </button>


          <svg
          className="h-30 w-30"
          onClick={handleColorChange}
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>heart</title>
          
          <path
            d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"
          
            fill={isBlack ? "#EC8607" : "#252A3A"}
          />
        </svg>

        </div>
        </div>
    
      </div>
      </div>
    </Layout>
  );
}

export default ArticleDeatils;
