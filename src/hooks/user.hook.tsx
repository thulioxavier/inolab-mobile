import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LoginUser } from "../services/api";
import AsyncStorege from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

interface UserProviderProps {
    children: ReactNode
}

interface User {
    id: number;
    name: string;
    email: string;
    token: string;
}

interface IAuthContextData {
    user: User;
    inAuth(): Promise<void>;
    setEmail: Function;
    setPassword: Function;
    email: string;
    password: string;
    authError: boolean;
    setAuthError: Function;
    setLoading: Function;
    loading: boolean;
}

const UserContext = createContext({} as IAuthContextData);

export const UserProvider = ({ children }: UserProviderProps) => {

    const [user, setUser] = useState<User>({} as User);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [authError, setAuthError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<any>();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            setLoading(true);
            const dataUser: any = await AsyncStorege.getItem('@inolab:user');
            if (dataUser) {
                setUser(JSON.parse(dataUser));
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    const inAuth = async () => {
        try {
            const { data, error }: any = await LoginUser({ email, password });

            if (data) {
                console.log(data);
                setUser(data);
                await AsyncStorege.setItem('@inolab:user', JSON.stringify(data));
                navigation.navigate('Home');
            }

            if (!data) {
                setAuthError(true);
            }
        } catch (error) {
            setAuthError(true);
            throw new Error('Falha na autenticação!');
        }
    }

    return (
        <UserContext.Provider value={{ user, inAuth, setEmail, setPassword, email, password, authError, setAuthError, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
}