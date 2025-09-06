'use client'

import { User, onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useState, useEffect, ReactNode } from "react";

import { auth } from "@/lib/clientApp"

type AuthContextType = {
    user: User | null;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}