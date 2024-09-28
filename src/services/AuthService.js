import request from "../Axios/request"
const Authbase = `${import.meta.env.VITE_BASE_URL}/auth`
export default {
    // --------------------------------------AUTHENTICATION MODULE----------------------------------//
    Login(userCredentials) {
        return request({
            url: `${Authbase}/login`,
            method: "POST",
            data: userCredentials,
        });
    },
    createAccount(data) {
        return request({
            url: `${Authbase}/create-account`,
            method: "POST",
            data,
        });
    },
    GetProfile(data) {
        return request({
            url: `${Authbase}/get-profile`,
            method: "POST",
            data,
        });
    },
}