import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import "../auth.form.scss"

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { user, loading, handleRegister } = useAuth()

    // While app is checking session cookie, show nothing
    if (loading) {
        return (
            <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Checking session...</p>
            </main>
        )
    }

    // Already logged in → send to home
    if (user) {
        return <Navigate to="/" replace />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)
        const result = await handleRegister({ username, email, password })
        setIsSubmitting(false)
        if (result?.user) {
            navigate("/")
        } else {
            setError(result?.message || "Registration failed. The email or username may already be taken.")
        }
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>

                {error && (
                    <div className="error-message" style={{ color: '#ff4d4f', background: 'rgba(255,77,79,0.1)', border: '1px solid rgba(255,77,79,0.3)', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', fontSize: '0.9rem' }}>
                        ⚠️ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' placeholder='Enter username' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter email address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Enter password' required />
                    </div>
                    <button className='button primary-button' disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}

export default Register