import React, { useContext, useEffect, useState } from 'react'
import './EmailVerify.css'
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StroreContext';
import axios from 'axios';
import Loader from '../Loader/Loader'

const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(false);
    const { url } = useContext(StoreContext);
    const param = useParams();
    const [loading, setLoading] = useState(false);
    


    useEffect(() => {
        ; (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${url}/api/user/${param.id}/verify/${param.token}`);
                console.log(data);
                setValidUrl(data.success)
            } catch (error) {
                console.log(error)
                setValidUrl(false)
            } finally {
                setLoading(false);
            }
        })();
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {validUrl ? (
                <div className="email-verify">
                    <h1>Email Verified Successfully.</h1>
                    <Link to='/'>
                        <button className='green-btn'>Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </>
    )
}

export default EmailVerify
