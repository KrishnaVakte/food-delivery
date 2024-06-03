import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StroreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {

    const { url, setToken, setLoading } = useContext(StoreContext);
    const [currState, setCurrState] = useState('Login')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }))

    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += '/api/user/login'
        }
        else {
            newUrl += '/api/user/register'
        }

        setLoading(true);
        setShowLogin(false);
        const response = await axios.post(newUrl, data);
        setShowLogin(true);
        setLoading(false);
        if (response.data.token) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false);
            toast.success(response.data.message);
        }
        else {
            setCurrState('Login');
            toast.error(response.data.message);
        }
        
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" name='name' value={data.name} onChange={onChangeHandler} placeholder='Your Name' required />}
                    <input type="email" name='email' value={data.email} onChange={onChangeHandler} placeholder='Your Email' required />
                    <input type="password" name='password' value={data.password} onChange={onChangeHandler} placeholder='Password' required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === 'Login'
                    ? <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup
