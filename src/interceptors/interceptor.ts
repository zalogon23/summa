import { tokenService } from '../services/TokenService';

class Interceptor {

    async fetch(resource: any, config?: any): Promise<Response> {
        const headers = {
            ...config?.headers,
            "Authorization": `Bearer ${tokenService.getToken()}`,
        };
        const updatedConfig = { ...config, headers };

        try {
            // Try the original fetch with the provided resource and config
            const response = await fetch(resource, updatedConfig);

            // Check if the response status is 401 (Unauthorized)
            if (response.status === 401) {

                const newToken = await tokenService.getRefreshToken();
                tokenService.storeToken(newToken);

                // Retry the original fetch with the updated token
                const headers = {
                    ...config?.headers,
                    "Authorization": `Bearer ${newToken}`,
                };
                const updatedConfig = { ...config, headers };
                const retryResponse = await fetch(resource, updatedConfig);

                if (retryResponse.status === 401) {

                    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
                    return Promise.reject();
                }

                // Retry succeeded, return the response
                return retryResponse;
            }

            // Response status is not 401, return the original response
            return response;
        } catch (error) {
            // Handle fetch errors (e.g., network errors, etc.)
            console.error(error);
            return Promise.reject();
        }
    }
}

export const interceptor = new Interceptor()