import { useState } from "react";
import article from "./assets/article.svg"
const Signup = () => {
    const [active , setActive] = useState(false)
    return(
        <div className="flex bg-[#F9F9F9] text-black">
                <div className="hidden sm:block w-full">
                    <img src={article} alt="articles" />
                </div>
                <div className="flex flex-col items-center w-full mt-8 px-6">
                    <p className="pb-20">
                        <h1 className="text-[40px] font-semibold">Welcome to <span className="text-[#800020]">Paperhub</span></h1>
                    </p>

                    <form className="flex flex-col justify-center items-center w-full gap-12">
                        <label htmlFor="name" className="hidden">Full Name</label>
                        <input type="text" id="name"minlength="3" maxlength="20" placeholder="Full Name" required className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"/>
                        <label htmlFor="gmail" className="hidden">Gmail</label>
                        <input type="text" id="gmail" placeholder="Gmail" required className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"/>
                        <label htmlFor="password" className="hidden">Password</label>
                        <div className="w-full flex">
                            <input type={active? "text" : "password"} id="password" minLength="8" placeholder="Password" required className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"/>
                            <div onClick={()=> setActive(!active)} className="p-1 bg-transparent cursor-pointer border-b-2 border-[#004D40]">Visible</div>
                        </div>
                        <div className="flex flex-col items-center w-full py-24 gap-7">
                            <button className="w-full bg-[#004D40] hover:bg-[#004D40]/[0.8] transition-colors duration-[0.5s] py-5 rounded-3xl text-white text-[20px]">SignUp</button>
                            <p className="text-[#800020]">
                                Already have an account ?
                                <a href="#" className="hover:underline">Signin</a>
                            </p>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default Signup;