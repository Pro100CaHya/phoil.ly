import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

class ApiInstance {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: "https://phoil-ly-restful-api.onrender.com/api",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.get(
                endpoint,
                options
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const apiInstance = new ApiInstance();