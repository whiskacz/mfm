import { createContext } from 'react';
import { DataContextType } from '../interfaces/interfaces';
import { loginData } from '../data/data'


export const LoginContext = createContext(loginData)

export const LoginContextProvider = ({
    children}: DataContextType) => {
        return <LoginContext.Provider value={loginData}>{children}</LoginContext.Provider>
    }