import { useState } from "react";
import axios from "axios";
import article from "/images/assets/article.svg";



const Login = () => {
    const [active , setActive] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8000/token/',
                {
                    username : username,
                    password : password
                },
                {
                    headers : {
                    'Content-Type': 'application/json'
                    },
                    withCredentials : true
                }
            );
            const { access, refresh } = response.data;
            // Save tokens in local storage
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            // Set the Authorization header for future Axios requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
            
            // Redirect to the home page
             window.location.href = '/';


        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., show an error message to the user)
            
        }
    }
    return(
        <div className="flex bg-[#F9F9F9] text-black min-h-screen">
            <div className="hidden h-full sm:block w-full">
                <img src={article} className="h-full" alt="articles" />
            </div>
            <div className="flex flex-col items-center w-full mt-24 px-6">
                <p className="pb-20">
                    <h1 className="text-[40px] font-semibold">Welcome to <span className="text-[#800020]">Paperhub</span></h1>
                </p>
                <form className="flex flex-col justify-center items-center w-full gap-16" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="hidden">Username</label>
                    <input type="text" id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"/>
                    <label htmlFor="password" className="hidden">Password</label>
                    <div className="w-full flex">
                        <input type={active? "text" : "password"} id="password" minLength="8" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-6 border-b-2 border-[#004D40] bg-transparent py-1 focus:outline-none placeholder:text-[20px]"/>
                        <div onClick={()=> setActive(!active)} className="p-1 bg-transparent cursor-pointer border-b-2 border-[#004D40]">{!active ? 'Visible': 'Hide'}</div>
                    </div>
                    <div className="flex flex-col items-center w-full py-19 gap-7">
                        <button className="w-full bg-[#004D40] hover:bg-[#004D40]/[0.8] transition-colors duration-[0.5s] py-5 rounded-3xl text-white text-[20px]">Sign In</button>
                        <p className="text-[#800020]">
                            Don't have an account ?
                            <a href="/auth/sign-up" className="ml-1 hover:underline">SignUp</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;