import Cookies from "js-cookie"

const isValidUser = () => {
    const accessToken = Cookies.get('PHaccessToken');
    const refreshToken = Cookies.get('PHrefreshToken');
    const user = JSON?.parse(Cookies?.get('PHuser') ?? null);

    return {
        accessToken,
        refreshToken,
        user,
        isValidAuth: (accessToken && user)
    };
}

export default isValidUser;