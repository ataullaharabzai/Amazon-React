import { useContext, createContext } from "react";

const LoginContext = createContext({
    isLogedIn: false,
    userName: 'Ataullah',
    country: 'Afghanistan'
})

export const LoginProvider = LoginContext.Provider

export const useLogin = () => {
    return useContext(LoginContext)
}