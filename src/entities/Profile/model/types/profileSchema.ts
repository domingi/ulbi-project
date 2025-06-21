import { COUNTRY, CURRENCY } from "~/shared/constants/common";

export interface Profile {
    first: string;
    lastName: string;
    age: string;
    currency: CURRENCY;
    country: COUNTRY;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error: string;
    readonly: boolean;
}