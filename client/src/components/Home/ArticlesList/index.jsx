import TopChevron from "/images/Home/ArticlesList/top-chevron.svg"
import LeftChevron from "/images/Home/ArticlesList/chevrons-right.svg"
import RightChevron from "/images/Home/ArticlesList/chevrons-left.svg"
import { useState } from "react";
import Article from "./Article";

const filters = [
    {
        title: "Most liked articles",
        query: "mla" //to use in request
    },
    {
        title: "Most searched articles",
        query: "msa"
    },
    {
        title: "Most disliked articles",
        query: "mda"
    },
    {
        title: "Most reported articles",
        query: "mra"
    }
]

const ArticlesList = ({ articles }) => {

    const [isChevronOpen, setIsChevronOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activFiltereIndex, setActiveFilterIndex] = useState(0);

    const setSelectedFilter = async (index) => {
        setActiveFilterIndex(index);
        //add query request logic here
        setIsChevronOpen(false);
    }

    return (
        <section className="relative flex flex-col gap-8">
            <div className={`bg-white absolute top-8 left-0 z-30 flex flex-col gap-4 px-6 text-xl py-4 rounded-xl shadow-lg ${!isChevronOpen && 'pointer-events-none opacity-0'}`}>
                {
                    filters.map(({ title, query }, index) => (
                        <div onClick={() => setSelectedFilter(index)} key={index} className="cursor-pointer font-bold font-second transition-all text-dark-gray hover:text-black">{title}</div>
                    ))
                }
            </div>
            <div className="flex flex-col">
                <div className="flex gap-8 cursor-pointer" onClick={() => setIsChevronOpen((prev) => !prev)} >
                    <h3 className="text-lg sm:text-xl text-main font-bold w-fit">Most searched articles</h3>
                    <img src={TopChevron} alt="Top Chevron" className={`flex w-fit transition-all ${(isChevronOpen) ? 'rotate-0' : 'rotate-180'}`} />
                </div>
                <div className="flex items-center">
                    <h6 className="text-md sm:text-lg text-dark-gray font-bold w-fit">{filters[activFiltereIndex].title}</h6>
                </div>
            </div>
            <div className="block xl:flex w-full">
                <div className="gap-4 w-full flex flex-col items-center justify-center">
                    <div className="max-w-[70vw] md:max-w-[80vw] w-full overflow-hidden scrollbar-hide flex justify-start items-center">
                        {
                            articles.map((article, index) => (
                                <Article key={index} {...article} activeIndex={activeIndex} />
                            ))
                        }
                    </div>
                </div>
                <div className={`transition-all inline-flex xl:flex xl:-order-1 ${activeIndex<=0 && 'pointer-events-none opacity-0'}`}>
                    <img src={RightChevron} alt="Right Chevron" className="cursor-pointer" onClick={() => activeIndex>0 && setActiveIndex((prev) => --prev)} />
                </div>
                <div className={`transition-all inline-flex ml-4 xl:ml-0 xl:flex ${activeIndex>=articles.length-3 && 'pointer-events-none opacity-0'}`}>
                    <img src={LeftChevron} alt="Left Chevron" className="cursor-pointer" onClick={() => activeIndex<articles.length-3 && setActiveIndex((prev) => ++prev)} />
                </div>
            </div>
        </section>
    )
}

export default ArticlesList