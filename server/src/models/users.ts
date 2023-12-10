export interface User {
    id: number
    email: string;
    number: string;
}

export interface Users {
    [index: number]: User
}