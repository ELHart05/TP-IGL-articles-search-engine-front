import Papers from "/images/Home/WhyUs/papers.svg"
import Ellipse from "/images/Home/WhyUs/ellipse.svg"

const reasons = [
    {
        title: "Diversity",
        description: "In our website  you will find  articles in diffentes domains"
    },
    {
        title: "reliability",
        description: "All articles are from reliable ressources"
    },
    {
        title: "rapidity",
        description: "The searches  results will so rapidly appear"
    }
]

const WhyUs = () => {
    return (
        <section className="px-9 flex flex-col md:flex-row items-center gap-8 md:gap-6">
            <div className="md:w-1/2">
                <img src={Papers} alt="Papers" className="hover:-rotate-6 transition-all" />
            </div>
            <div className="md:w-1/2 flex flex-col gap-8 justify-center">
                <h3 className="text-lg sm:text-xl text-main font-bold w-fit">Why choosing us?</h3>
                <div className="flex flex-col gap-12">
                    {
                        reasons.map(({ title, description }, index) => (
                            <div key={index} className="flex gap-3 items-center transition-all hover:translate-x-2 cursor-pointer">
                                <div>
                                    <img src={Ellipse} alt="Ellipse" />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="font-bold text-md sm:text-lg capitalize">{title}</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyUs