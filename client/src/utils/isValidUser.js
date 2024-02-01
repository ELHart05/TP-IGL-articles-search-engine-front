import Cookies from "js-cookie"

const isValidUser = () => {
    const accessToken = Cookies.get('PHaccessToken');
    const user = JSON?.parse(Cookies?.get('PHuser') ?? null);

    return {
        accessToken,
        user,
        isValidAuth: (accessToken && user)
    };
}

export default isValidUser;