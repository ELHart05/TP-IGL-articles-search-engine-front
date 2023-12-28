import Info1 from "/images/Home/Information/information1.svg"
import Info2 from "/images/Home/Information/information2.svg"
import Info3 from "/images/Home/Information/information3.svg"

const Informations = () => {
    return (
        <section className='flex flex-col md:flex-row gap-3 text-white'>
            <div className='flex flex-col gap-6 md:gap-8 bg-second md:w-2/3 p-4 md:p-8'>
                <p className="text-lg">Welcome to PapersHub! We are a team of dedicated students from the Higher School of Computer Science in Algeria, passionate about delivering a seamless and enriching article-reading experience to our users.</p>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">Mission and Vision</h3>
                    <p className="p-3 pt-0">Our mission is to empower users to explore, discover, and save articles that resonate with them. We aim to provide a user-friendly platform that enables easy access to a wide range of articles while offering personalized options for research and exploration.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">Team Members</h3>
                    <ul className="list-disc list-inside p-3 pt-0">
                        <li>Allaoua Okba</li>
                        <li>Arab Hamza</li>
                        <li>Cherfa Mohamed</li>
                        <li>Boukefallah Abdoullah</li>
                        <li>Boubenia Walid</li>
                        <li>Benkhelifa Bouchra</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">Values and Principles</h3>
                    <p className="p-3 pt-0">At PapersHub, we uphold principles of accuracy, reliability, inclusivity, and user-centricity. We are committed to continuously improving our app to meet user needs effectively.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">App Features</h3>
                    <h4>Explore PapersHub to discover:</h4>
                    <ul className="list-disc list-inside p-3">
                        <li>Access to a vast collection of articles</li>
                        <li>Customizable search options for a personalized reading experience</li>
                        <li>Like and Save feature to curate your list of preferred articles</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">Development Journey</h3>
                    <p className="p-3 pt-0">Our journey began with a shared passion for creating a platform that simplifies article exploration. Throughout our development process, we encountered challenges, learned valuable lessons, and celebrated milestones that shaped PapersHub into the app you see today.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">Acknowledgments & Credits</h3>
                    <p className="p-3 pt-0">We extend our gratitude to Mr. Soufiane Batata, our esteemed coordinator and mentor, whose guidance and support have been invaluable in bringing PapersHub to fruition.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 md:w-1/3 overflow-hidden scrollbar-hide scollbar-hide'>
                <div className='flex items-center w-full bg-no-repeat bg-top bg-[url("/images/Home/Information/information1.svg")]'>
                    <img src={Info1} alt="Information" className="aspect-square opacity-0" />
                </div>
                <div className='flex items-center w-full bg-no-repeat bg-top bg-[url("/images/Home/Information/information2.svg")]'>
                    <img src={Info2} alt="Information" className="aspect-square opacity-0" />
                </div>
                <div className='flex items-center w-full bg-no-repeat bg-top bg-[url("/images/Home/Information/information3.svg")] col-span-2 md:col-span-1'>
                    <img src={Info3} alt="Information" className="aspect-square opacity-0" />
                </div>
            </div>
        </section>
    )
}

export default Informations