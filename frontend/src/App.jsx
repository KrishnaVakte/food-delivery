import React, { useContext, useState } from 'react'
import { EmailVerify, Footer, Loader, LoginPopup, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder, Verify, MyOrders } from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from './context/StroreContext';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const { loading } = useContext(StoreContext);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        {loading
          ? <Loader />
          : <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
            <Route path='/user/:id/verify/:token' element={<EmailVerify />} />

          </Routes>
        }

      </div>
      <Footer />
    </>
  )
}

export default App