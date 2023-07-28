import { toast } from "react-toastify";
import { interceptor } from "../interceptors/interceptor";

class VideoService {
    async getSummary(url: string) {
        try {
            const parsedUrl = encodeURIComponent(url)
            const response = await interceptor.fetch(`${process.env.REACT_APP_BACKEND_URL}/video/${parsedUrl}`);
            const json = await response.json()
            if (!json.ok) {
                toast.warning(json.message, {
                    autoClose: 2.8 * 1000
                })
                return null
            }
            return json
        } catch (err) {
            console.error(err)
        }
    }
    async getDuration(url: string) {
        try {
            const parsedUrl = encodeURIComponent(url)
            const response = await interceptor.fetch(`${process.env.REACT_APP_BACKEND_URL}/video/duration/${parsedUrl}`);
            const json = await response.json()
            if (!json.ok) {
                toast.warning(json.message, {
                    autoClose: 2.8 * 1000
                })
                return null
            }
            return json
        } catch (err) {
            console.error(err)
        }
    }

    isValidYouTubeUrl(url: string) {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}/;
        const shortUrlRegex = /^(https?:\/\/)?(www\.)?youtu\.be\/[a-zA-Z0-9_-]{11}/;

        return youtubeRegex.test(url) || shortUrlRegex.test(url);
    }
}

export const videoService = new VideoService()