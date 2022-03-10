import React, { createContext, useReducer } from "react";
import {initialState, UserReducer} from '../reducers/UserReducer';

export const UserContext = createContext({});

export default ({ children }: any) => {
    const [state, dispatch] = useReducer<any>(UserReducer, initialState)
    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}