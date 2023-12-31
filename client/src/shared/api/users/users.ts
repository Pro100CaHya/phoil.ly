import { User } from "./model";
import { apiInstance } from "../base";

const BASE_URL = "/users";

export type getUsersParams = {
    email: string;
    number?: string;
}

export const getUsers = (
    params: getUsersParams,
    signal: AbortSignal
): Promise<User[]> => (
    apiInstance.get(BASE_URL, {
        params,
        signal 
    })
);