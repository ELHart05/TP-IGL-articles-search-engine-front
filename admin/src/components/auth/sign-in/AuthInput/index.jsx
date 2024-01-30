import { useState } from "react"

const AuthInput = ({ register, attribute , errors }) => {

    const [isPasswordVisible, setIspasswordVisible] = useState(false);

    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex relative">
                <input type={(attribute == 'password') ? (isPasswordVisible) ? 'text' : 'password' : "text"} {...register} placeholder={attribute} className="bg-transparent w-full focus:outline-none outline-none text-xl font-bold placeholder:text-xl placeholder:font-bold pt-2 pb-4 pl-6 pr-12 md:pr-14 border-b-2 focus:border-b-Pgreen transition-all placeholder:capitalize" />
                {(attribute == 'password') && <img src={(isPasswordVisible) ? "/panel/images/auth/sign-in/eye-slash-regular.svg" : "/panel/images/auth/sign-in/eye-regular.svg"} onClick={() => setIspasswordVisible((prev) => !prev)} className="cursor-pointer h-6 w-6 md:h-7 md:w-7 right-4 mt-3 md:mt-2 absolute" alt="Password" />}
            </div>
            {errors[attribute] && <p className="text-red-500 font-bold">{errors[attribute].message}</p>}
        </div>
    )
}

export default AuthInput