import { useContext, createContext, useState } from "react";

const LoginContext = createContext({
    user: {
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    },
    setUser: () => { }
})

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    })

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    return useContext(LoginContext)
}