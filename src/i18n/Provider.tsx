import flatten from "flat";
import React from "react";
import { Fragment, ReactNode, useContext, useEffect } from "react";
import { IntlProvider } from "react-intl";

import { ACTIONS, GlobalContext } from "../context/GlobalContext";
import messages from "./messages";

const Provider = (props: { children: ReactNode }) => {
    const {
        state: { locale, isDarkTheme },
        dispatch,
    } = useContext(GlobalContext);

    const { children } = props;

    useEffect(() => {
        initialThemeHandler();
    }, [isDarkTheme]);
    const initialThemeHandler = () => {
        if (isDarkTheme) {
            document?.querySelector("body")?.classList.contains("dark")
                ? ""
                : document?.querySelector("body")?.classList.add("dark");
        } else {
            document?.querySelector("body")?.classList.contains("dark")
                ? document?.querySelector("body")?.classList.toggle("dark")
                : "";
        }
    };
    useEffect(() => {
        getLocale();
    }, []);
    const getLocale = () => {
        const currentLocale = locale;
        const currentTheme = isDarkTheme;

        if (!currentLocale) return;

        dispatch({
            type: ACTIONS.SET_LOCALE,
            payload: currentLocale,
        });
        dispatch({
            type: ACTIONS.SET_IS_DARK_THEME,
            payload: currentTheme,
        });
    };
    return (
        <IntlProvider
            textComponent={Fragment}
            locale={locale}
            messages={flatten(messages[locale])}
        >
            {children}
        </IntlProvider>
    );
};

export default Provider;
