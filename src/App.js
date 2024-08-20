import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import useAuthContext from './Hooks/useAuthContext';


function App() {
  const {user} = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ user ? <Home /> : <Navigate to='/login' /> } />
          <Route path='/signup' element={  !user ?   <SignUp/> : <Navigate to='/' />}/>
      <Route path='/login' element={  !user ?  <Login/> : <Navigate to='/' /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
