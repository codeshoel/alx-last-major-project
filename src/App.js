import './assets/css/demo1.min.css';
import './assets/css/style.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Contact from './pages/Contact';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Error from './components/Error';
import OrderCompleted from './pages/OrderCompleted';
import ProductDetail from './pages/ProductDetail';
import Notification from './components/Notification';
import ProtectedRoute from './components/ProtectedRoute';
import deleteCookie from './utils/deleteCookie';
import NotifySuccess from './utils/notifications/NotifySuccess';
import CreateCategory from './pages/CreateCategory';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import UserAccountDetails from './pages/UserAccountDetails';
import UserAddresses from './pages/UserAddresses';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // set to true for testing
  // let navigate = useNavigate();


  const Logout = () => {
    deleteCookie("token");
    // navigate('/login');
    NotifySuccess("Your have been signed out!");
    setIsLoggedIn(false)
  }
  return (
    <>
      <Header isLoggedIn={isLoggedIn} Logout={Logout} />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="/cart" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Cart />
            </ProtectedRoute>}
          />
          <Route path="/categories/create" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CreateCategory />
            </ProtectedRoute>}
          />
          <Route path="/products/add" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AddProduct />
            </ProtectedRoute>}
          />
          <Route path="/dashboard" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>}
          />
          <Route path="/orders" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Orders />
            </ProtectedRoute>}
          />
          <Route path="/user/account-details" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UserAccountDetails />
            </ProtectedRoute>}
          />
          <Route path="/user/addresses" 
           element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UserAddresses />
            </ProtectedRoute>}
          />
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} /> 
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/contact"  element={<Contact />}/>
          <Route path="/my-account"  element={<UserAccount />}/>
          <Route path="/checkout"  element={<CheckOut />}/>
          <Route path="/order-completed"  element={<OrderCompleted />}/>
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
