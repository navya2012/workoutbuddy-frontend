
import { useNavigate } from 'react-router-dom'
import useAuthContext from './useAuthContext'

const useLogout = () => {
   const {dispatch} = useAuthContext()

   const navigate = useNavigate()

   const logout = () => {
    localStorage.removeItem("user")

    //update context
    dispatch({type:'LOGOUT', })
    navigate("/signup")
   }

   return { logout}

}

export default useLogout