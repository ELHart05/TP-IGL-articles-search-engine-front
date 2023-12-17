import Papers from "/images/Home/Hero/hero-papers.webp";
import Ellipse from '/images/Home/WhyUs/ellipse.svg';
import { Link } from "react-router-dom";
import './style.css'

const stats = [
    {
        title: "12k+",
        paragraph: "Articles"
    },
    {
        title: "20k+",
        paragraph: "Visitors"
    },
    {
        title: "7k+",
        paragraph: " Liked Articles"
    },
    {
        title: "4k+",
        paragraph: "Share"
    }
]

const Hero = () => {
    return (
        <section className="pl-9">
            <section className='flex flex-col gap-8'>
                <div className='flex flex-col-reverse sm:flex-row gap-8 sm:gap-6 items-center'>
                    <div className='w-full sm:w-[45%] flex flex-col gap-4 lg:gap-10 pr-9 sm:pr-0'>
                        <div>
                            <h1 className="font-second text-xl md:text-2xl [@media(min-width:_825px)]:text-3xl [@media(min-width:_1035px)]:text-4xl text-main font-bold w-fit">PapersHub,</h1>
                            <p className="text-2xl md:text-3xl [@media(min-width:_825px)]:text-4xl [@media(min-width:_1035px)]:text-5xl text-black font-bold w-fit pr-10">
                                where the realm of scientific articles awaits exploration.
                            </p>
                        </div>
                        <div className="flex gap-4 items-center font-bold flex-wrap">
                            <Link to={'/search'} className="text-black px-5 py-2 bg-main rounded-xl transition-all hover:bg-black hover:text-main">Search Here</Link>
                            <Link to={'mailto:igl@esi.dz'} className="hover:underline transition-all">Contact Us {">"}</Link>
                        </div>
                    </div>
                    <div className='w-full sm:w-[55%]'>
                        <img src={Papers} alt="Papers" />
                    </div>
                </div>
                <div className='flex justify-center gap-10 md:gap-16 lg:gap-32 items-center flex-wrap pr-9'>
                    {
                        stats.map(({ title, paragraph }, index) => (
                            <div key={index} className='flex gap-4 items-center transition-all hover:translate-y-1 cursor-pointer'>
                                <div>
                                    <img src={Ellipse} alt="Ellipse" />
                                </div>
                                <div className='flex flex-col gap-0'>
                                    <h5 className='font-bold text-lg md:text-2xl'>{title}</h5>
                                    <p className='text-md md:text-lg'>{paragraph}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}

export default Hero