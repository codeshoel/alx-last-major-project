import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../components/PageTitle';
import setCookie from '../../utils/setCookie';
import NotifyScuccess from '../../utils/notifications/NotifySuccess';
import NotifyError from '../../utils/notifications/NotifyError';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        axios.post("http://localhost:7000/api/v1/auth/login", data)
            .then(response => {
                
                if(response.status === 200) {
                    NotifyScuccess("Login successful");
                    // Save token to Cookies
                    setCookie("token", response.data.token, 30);
                    navigate('/dashboard');
                } else {
                    NotifyError("Sorry! Something went wrong");
                }                
            })
            .catch(err => {
                console.log(err);
                // const error = err.response.data.data;
                NotifyError(`${err.response.data.data}`)
            });
    };

    return (
        <>
            <PageTitle title={"Login"} />
            <main className="main login-page">
                <div className="page-content">
                    <div className="container">
                        <div className="login-popup">
                        <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                            <ul className="nav nav-tabs text-uppercase" role="tablist">
                            <li className="nav-item">
                                <a href="login" className="nav-link active">
                                Log In
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="register" className="nav-link">
                                Create Account
                                </a>
                            </li>
                            </ul>
                            <div className="tab-content">
                            <div className="tab-pane active">
                                <form 
                                    onSubmit={handleSubmit}
                                    method="POST"
                                >
                                    <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        required="required"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    </div>
                                    <div className="form-group mb-0">
                                    <label>Password *</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        name="password"
                                        required="required"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>
                                    <div className="form-checkbox d-flex align-items-center justify-content-between">
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        name="remember"
                                    />
                                    <label htmlFor="remember1">Remember me</label>
                                    <a href="#forgotPassword">Forgot password?</a>
                                    </div>
                                    <div className="form-group mb-5 row">
                                        <input type="submit" value="Log In"  className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                            </div>
                            <p className="text-center">Sign in with social account</p>
                            <div className="social-icons social-icon-border-color d-flex justify-content-center">
                            <a href="#facebookAuth" className="social-icon social-facebook w-icon-facebook" />
                            <a href="twitterAuth" className="social-icon social-twitter w-icon-twitter" />
                            <a href="googleAuth" className="social-icon social-google w-icon-google" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
        
    );
}

export default Login;