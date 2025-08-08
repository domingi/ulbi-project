import { COUNTRY } from "~/entities/Country";
import { CURRENCY } from "~/entities/Currency";

export interface Profile {
    id?: string;
    first?: string;
    lastName?: string;
    age?: string;
    currency?: CURRENCY;
    country?: COUNTRY;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error: string;
    readonly: boolean;
    validateErrors?: VALIDATE_PROFILE_ERRORS[];
}

export enum VALIDATE_PROFILE_ERRORS {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}