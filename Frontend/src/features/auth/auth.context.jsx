import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Run getMe ONCE on app startup to restore session from cookie.
    // Keeping this in AuthProvider (not in useAuth hook) prevents it from
    // firing multiple times whenever different components call useAuth().
    useEffect(() => {
        const restoreSession = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            } catch (err) {
                // Not logged in — stay as null, that's fine
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        restoreSession()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )

}