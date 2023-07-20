import React, {useState} from "react";

interface user {
    name: string;
    email:string;
    role: string;
    status: boolean;
    google: boolean;
    uid: string;
}

interface AppContextI {
    token: string,
    user: user | null,
    setToken: (value: string) => void
    setUser: (value: user) => void
}

export const AppContext = React.createContext({} as AppContextI);

export const Provider = ({ children }: any) => {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<user | null>(null);

    const values = {
        token,
        setToken,
        user,
        setUser
    }

return(<AppContext.Provider value={values}>{children}</AppContext.Provider>)

}