import React from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import useLogout from '../../Hooks/useLogout'
import useAuthContext from '../../Hooks/useAuthContext'

const Navbar = () => {
  const {user} = useAuthContext()
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
   <>
        <nav  >
            <Link to='/'>WorkoutBuddy</Link>
      <div>
            {
              user && (
                
            <div className='logout'>
              <span>{user?.email}</span>
            <button className='button-styles' onClick={handleClick}>Logout</button>
          </div>
              )
            }
            {
              !user && (
                <div className='menu'>
                <Link className='button-styles' to='/signup'>SignUp</Link>
                <Link className='button-styles' to='/login'>Login</Link>
            </div>
              )
            }
           </div>
        </nav>
   </>
  )
}

export default Navbar