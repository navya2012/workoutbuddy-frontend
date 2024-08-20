import React, { useState } from 'react'
import '../Login/LoginStyles.css'
import useSignUp from '../../Hooks/useSignUp'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const { signup, error } = useSignUp()
    console.log(error)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
        //    setEmail(" ")
        //    setPassword(" ")
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="main-form">
                <form onSubmit={handleSubmit}>
                    <h1>SignUp Form</h1>
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
                        </div>
                    </div>
                    <button>Submit</button>
                    {error && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    {Array.isArray(error) ? (
                        error.map((err, index) => <p key={index}>{err.msg}</p>)
                    ) : (
                        <p>{error}</p>
                    )}
                </div>
            )}
                </form>
            </div>
        </>
    )
}

export default SignUp