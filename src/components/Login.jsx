import React from 'react'
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import {authUserLogin} from '../redux/action.js'
function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogin(){
        dispatch(authUserLogin())
        navigate('/home')
    }
    return (
        <div>
            <h2>Login Page</h2>
            <Button sx={{margin:"10px"}} onClick={handleLogin} variant="contained">Login</Button>
            <Link to="/home"><Button sx={{margin:"10px"}}  variant="contained">Homepage</Button></Link>
        </div>
    )
}

export default Login
