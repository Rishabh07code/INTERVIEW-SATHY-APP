import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api";


export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        try {
            const data = await login({ email, password })
            if (data?.user) {
                setUser(data.user)
            }
            return data
        } catch (err) {
            console.error('Login error:', err)
            return { message: err?.response?.data?.message || 'Login failed. Please try again.' }
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        try {
            const data = await register({ username, email, password })
            if (data?.user) {
                setUser(data.user)
            }
            return data
        } catch (err) {
            console.error('Register error:', err)
            return { message: err?.response?.data?.message || 'Registration failed. Please try again.' }
        }
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch (err) {
            console.error('Logout error:', err)
        } finally {
            setUser(null)
        }
    }

    return { user, loading, handleRegister, handleLogin, handleLogout }
}