import { createContext, Dispatch, ReactNode, useReducer } from "react";
import React from "react";

import { LANGUAGE_CODES, TLanguage } from "../constants";
import { saveStore } from "../store/GlobalStore";

export enum ACTIONS {
    SET_LOCALE = "SET_LOCALE",
    SET_IS_DARK_THEME = "SET_IS_DARK_THEME",
}

export type TInitialStateType = {
    locale: TLanguage;
    isDarkTheme: boolean;
};

export type TActionType = {
    type: string;
    payload: unknown;
};

interface IProps {
    children?: ReactNode;
}

const initialState: TInitialStateType = {
    locale: LANGUAGE_CODES.ENGLISH,
    isDarkTheme: false,
};

export type TGlobalContextType = {
    state: TInitialStateType;
    dispatch: Dispatch<TActionType>;
};

export const GlobalContext = createContext<TGlobalContextType>({
    state: initialState,
    dispatch: () => null,
});

function reducer(state: TInitialStateType, action: TActionType) {
    switch (action.type) {
        case ACTIONS.SET_IS_DARK_THEME: {
            return {
                ...state,
                isDarkTheme: action.payload as boolean,
            };
        }
        case ACTIONS.SET_LOCALE: {
            return {
                ...state,
                locale: action.payload as TLanguage,
            };
        }
        default:
            return state;
    }
}

const GlobalContextProvider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    saveStore({ state, dispatch });
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
export default GlobalContextProvider;
