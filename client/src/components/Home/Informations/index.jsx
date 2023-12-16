import Info1 from "/images/Home/Information/information1.svg"
import Info2 from "/images/Home/Information/information2.svg"
import Info3 from "/images/Home/Information/information3.svg"

const Informations = () => {
    return (
        <section className='flex flex-col gap-3 text-white'>
            <div className='flex flex-col-reverse lg:flex-row bg-second'>
                <div className='w-full lg:w-[55%] flex items-center'>
                    <p className="font-semibold px-6 [@media(min-width:_580px)]:px-16 pt-8 pb-11 text-justify text-xs [@media(min-width:_580px)]:text-[17px] xl:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; At [Your App Name], our team is the driving force behind the seamless and innovative experience we deliver. Comprising passionate individuals with diverse expertise, we come together with a shared commitment to excellence in the realm of scientific discovery. From seasoned developers ensuring a robust and user-friendly platform to dedicated researchers curating and validating content, each member plays a pivotal role. Our collaborative spirit fosters an environment where creativity and expertise intersect, resulting in a dynamic space that continually evolves to meet the needs of our users. With a shared vision for advancing the boundaries of knowledge, our team is dedicated to making [Your App Name] the go-to destination for those hungry for insightful and diverse scholarly exploration.
                    </p>
                </div>
                <div className='w-full lg:w-[45%]'>
                    <img src={Info1} alt="Information" className="w-full" />
                </div>
            </div>
            <div className='flex flex-col [@media(min-width:_580px)]:flex-row gap-0 [@media(min-width:_580px)]:gap-4'>
                <div className='flex items-center w-full [@media(min-width:_580px)]:w-[55%]'>
                    <img src={Info2} alt="Information" className="w-full" />
                </div>
                <div className='w-full [@media(min-width:_580px)]:w-[45%]'>
                    <img src={Info3} alt="Information" className="w-full" />
                </div>
            </div>
        </section>
    )
}

export default Informations