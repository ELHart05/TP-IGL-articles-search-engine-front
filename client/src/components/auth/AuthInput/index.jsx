import { useState } from "react"

const AuthInput = ({ register, attribute , errors }) => {

    const [isPasswordVisible, setIspasswordVisible] = useState(false);

    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex relative">
                <input type={(['password', 'confirmPassword'].includes(attribute)) ? (isPasswordVisible) ? 'text' : 'password' : "text"} {...register} placeholder={(attribute == 'confirmPassword') ? 'Confirm password' : attribute} className="bg-transparent text-black w-full focus:outline-none outline-none text-xl font-bold placeholder:text-xl placeholder:font-bold pt-2 pb-4 pl-6 pr-12 md:pr-14 border-b-2 focus:border-b-Pgreen transition-all placeholder:capitalize" />
                {(['password', 'confirmPassword'].includes(attribute)) && <img src={(isPasswordVisible) ? "/images/auth/eye-slash-regular.svg" : "/images/auth/eye-regular.svg"} onClick={() => setIspasswordVisible((prev) => !prev)} className="cursor-pointer h-6 w-6 md:h-7 md:w-7 right-4 mt-3 md:mt-2 absolute" alt="Password" />}
            </div>
            {errors[attribute] && <p className="text-red-500 font-bold">{errors[attribute].message}</p>}
        </div>
    )
}

export default AuthInput