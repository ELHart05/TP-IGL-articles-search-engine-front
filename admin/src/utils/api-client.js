import axios from "axios"
import Cookie from "js-cookie"
import { SERVER_URL } from "../../constants";

const API = axios.create({
    baseURL: SERVER_URL.development,
})

API.interceptors.request.use((async (config) => {
    //intercept axios request set user cookies in the header
    const accessCookie = Cookie.get("accessToken");
    if (accessCookie) {
        config.headers.Authorization = `Bearer ${accessCookie}`
    }
    return config; 
}))

export default API;