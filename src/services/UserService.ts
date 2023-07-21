import { interceptor } from "../interceptors/interceptor";

class UserService {
    async getUser() {
        const response = await interceptor.fetch(`${process.env.REACT_APP_BACKEND_URL}/user`);
        const json = await response.json()
        return json
    }
}

export const userService = new UserService()