import React, { useState } from 'react'
import './LoginStyles.css'
import useLogin from '../../Hooks/useLogin'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const { login, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
        // setEmail(" ")
        // setPassword(" ")
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="main-form">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    <div className="field">
                        <label htmlFor="">Email:</label>
                        <input type="text" name='email' value={email} 
                        onChange={(e) => { setEmail(e.target.value) }}
                        autoComplete='off' 
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="">Password:</label>
                        <div className="password-input-wrapper">

                            <input
                                type={showPassword ? "text" : "password"}
                                name='password' value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>                    </div>
                    <button>Submit</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </>
    )
}

export default Login