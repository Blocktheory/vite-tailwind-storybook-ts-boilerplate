export const APP_NAME = "Frontier-web-app";

export const DEFAULT_TIMEOUT = 2000;

export enum LANGUAGE_CODES {
    ENGLISH = "en-us",
    HINDI = "in-hi",
    CHINESE = "ch-ma",
    VIETNAMESE = "vi-vi",
    TURKISH = "tr-tr",
    RUSSIAN = "rs-rs",
    FRENCH = "fr-ca",
}

export const SupportedLanguages: Array<{
    label: string;
    value: TLanguage;
    desc: string;
}> = [
    { label: "English", value: LANGUAGE_CODES.ENGLISH, desc: "English" },
    { label: "हिन्दी", value: LANGUAGE_CODES.HINDI, desc: "Hindi" },
    { label: "中国人", value: LANGUAGE_CODES.CHINESE, desc: "Chinese (Simplified)" },
    { label: "Tiếng Việt", value: LANGUAGE_CODES.VIETNAMESE, desc: "Vietnamese" },
    { label: "Türk", value: LANGUAGE_CODES.TURKISH, desc: "Turkish" },
    { label: "Русский", value: LANGUAGE_CODES.RUSSIAN, desc: "Russian" },
    { label: "Français", value: LANGUAGE_CODES.FRENCH, desc: "French" },
];

type TRegex = {
    [key: string]: RegExp;
};

export interface IToastType {
    message: string;
    toastType: string;
}

export type TThemes = "light" | "dark";

export type TLanguage = LANGUAGE_CODES;

export const currencies = [
    {
        currency: "United States Dollar",
        abbreviation: "USD",
        symbol: "&#36;",
        //   icon: usFlag,
    },
    {
        currency: "Euro Member Countries",
        abbreviation: "EUR",
        symbol: "&#8364;",
        //   icon: euroFlag,
    },

    {
        currency: "United Kingdom Pound",
        abbreviation: "GBP",
        symbol: "&#163;",
        //   icon: ukFlag,
    },
];

export const regExpression: TRegex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: /^(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~]*)*(#[\w\\-]*)?(\?.*)?$/,
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
};

export enum ERRORS {
    INVALID_STORE = "invalid store",
}
