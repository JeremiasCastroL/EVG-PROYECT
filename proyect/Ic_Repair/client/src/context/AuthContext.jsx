import { createContext, useState, useContext, useEffect } from "react";
import {registerRequest} from '../api/auth.js'
import { loginRequest } from "../api/auth.js";


export const AuthContext = createContext()
export const useAuth = () => {
     const context = useContext(AuthContext)
     if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
     }
     return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (err) {
            console.log("Error completo:", err);
        
            const serverError = err.response?.data;
        
            if (typeof serverError === "string") {
                setErrors([serverError]);
            } else if (Array.isArray(serverError)) {
                setErrors(serverError);
            } else if (serverError?.message) {
                setErrors([serverError.message]);
            } else {
                setErrors(["Error de conexión con el servidor"]);
            }
            }
    }

    const singin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log("login", res)

            setUser(res.data); // ← Aquí marcas el usuario
            setIsAuthenticated(true); // ← Aquí marcas como logueado
        } catch(err) {
            console.log(err)
    
            const serverError = err.response?.data;
    
            if (typeof serverError === "string") {
                setErrors([serverError]);
            } else if (Array.isArray(serverError)) {
                setErrors(serverError);
            } else if (serverError?.message) {
                setErrors([serverError.message]);
            } else {
                setErrors(["Error de conexión con el servidor"]);
            }
        }
    }
    

    useEffect(() => {
         if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
         }
    }, [errors])

    return (
        <AuthContext.Provider 
         value={{
             signup,
             singin,
             user,
             isAuthenticated,
             errors
        }}>
            {children}
        </AuthContext.Provider>   
    )
}