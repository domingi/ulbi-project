import { COUNTRY } from "~/entities/Country";
import { CURRENCY } from "~/entities/Currency";

export interface Profile {
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
}