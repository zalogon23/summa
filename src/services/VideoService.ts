import { interceptor } from "../interceptors/interceptor";

class VideoService {
    async getSummary(url: string) {
        const parsedUrl = encodeURIComponent(url)
        const response = await interceptor.fetch(`${process.env.REACT_APP_BACKEND_URL}/video/${parsedUrl}`);
        const json = await response.json()
        return json.result
    }
}

export const videoService = new VideoService()