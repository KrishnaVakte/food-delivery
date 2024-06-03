import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StroreContext';
import axios from 'axios';
import { Loader } from '../../components';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if (response.data.success) {
            navigate("/myorders")
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        ; (async () => {
            await verifyPayment();
        })();
    },[])


  return (
      <Loader/>
  )
}

export default Verify
