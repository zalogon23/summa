import { interceptor } from "../interceptors/interceptor";

class TokenService {
    getRefreshToken = async () => {
        const response = await interceptor.fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/google/refresh-token`, {
            method: "POST",
            credentials: 'include'
        });
        const json = await response.json()
        return json.token
    }

    storeToken(token: string) {
        localStorage.setItem("token", token)
    }

    getToken() {
        return localStorage.getItem("token") ?? ""
    }

    hasToken() {
        const token = localStorage.getItem("token")
        return !!token && token != "undefined";
    }

    getURLToken() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("access_token");
    }

    hasURLToken() {
        return !!this.getURLToken();
    }
}

export const tokenService = new TokenService()