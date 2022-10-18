import { Dispatch } from "react";

import { TActionType, TInitialStateType } from "../context/GlobalContext";

let Store: any = null;

export function saveStore(createdStore: {
    state: TInitialStateType;
    dispatch: Dispatch<TActionType>;
}) {
    Store = { ...createdStore };
}

export function getStore() {
    return Store;
}

export function clearStore() {
    Store = null;
    return Store;
}
