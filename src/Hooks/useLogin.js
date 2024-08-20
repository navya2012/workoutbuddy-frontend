

import  { useState } from 'react'
import useAuthContext from './useAuthContext'


const useLogin = () => {
    const [error, setError] = useState(null)

    const {dispatch} = useAuthContext()
  
    const login = async(email,password) => {
        setError(null)

        try{
        const response = await fetch('http://localhost:4000/api/user/login', {
            method:'POST',
            headers:{"Content-type" : "application/json"},
            body: JSON.stringify({email, password})
        })

        const data = await response.json()
        //console.log(data)

        if(!response.ok){
            setError(data.error)
        }

        if(response.ok){
            //save user in local storage
            localStorage.setItem("user",JSON.stringify(data))

            //update user context
            dispatch({ type: "LOGIN", payload: data})
        }
    }
    catch(err){
        console.log(err)
    }
    }

    return {login, error}
}

export default useLogin