export interface User {
    id: string;
    username: string;
}

export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}