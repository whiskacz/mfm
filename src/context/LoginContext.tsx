import React, { createContext, useContext} from 'react';
import { LoginType } from '../interfaces/interfaces';
import { loginData } from '../data/data';

const LoginContext = createContext<LoginType | undefined>(undefined)


export const LoginProvider: React.FC = () => {


    return <LoginContext.Provider value={{loginData:LoginType}}/>

}