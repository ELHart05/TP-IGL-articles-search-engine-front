import Cookies from "js-cookie"

const isValidUser = () => {
    const accessToken = Cookies.get('PHaccessToken');
    const user = Cookies.get('PHuser');

    return {
        accessToken,
        user,
        isValidAuth: (accessToken && user)
    };
}

export default isValidUser;