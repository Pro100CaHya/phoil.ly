export interface User {
    email: string;
    number: string;
}

export interface Users {
    [index: number]: User
}