

import  { useState } from 'react'
import useAuthContext from './useAuthContext'
import { useNavigate } from 'react-router-dom'

const useSignUp = () => {
    const [error, setError] = useState(null)

    const {dispatch} = useAuthContext()

    const navigate = useNavigate()
  
    const signup = async(email,password) => {
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
            method:'POST',
            headers:{"Content-type" : "application/json"},
            body: JSON.stringify({email, password})
        })

        const data = await response.json()
        console.log(data)
        if(!response.ok){
            setError(data.error)
        }

        if(response.ok){
            //save user in local storage
            localStorage.setItem("user",JSON.stringify(data))

            //update user context
            dispatch({ type: "LOGIN", payload: data})
            navigate('/login')
        }
    }

    return {signup, error}
}

export default useSignUp