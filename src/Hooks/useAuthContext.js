
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'



const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthContext can not be used")
    }
    return context
}

export default useAuthContext