import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import NotifyError from '../../utils/notifications/NotifyError';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password
        };
        axios.post('http://localhost:7000/api/v1/auth/signup', data)
            .then(response => {
                if(response.status === 201) {
                    navigate('/auth/login');
                } else {
                    NotifyError("Sorry! Something went wrong");
                }
                console.log(response.data)
            })
            .catch(err => {
                // const error = err.response.data.data;
                NotifyError(`${err.response.data.data}`)
            });

        // alert(`The data is: ${name}, ${email}, ${password}`);
    }


    return (
        <>
            <PageTitle title={'Register'} />
            <main className="main login-page">
                <div className="page-content">
                    <div className="container">
                        <div className="login-popup">
                        <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                            <ul className="nav nav-tabs text-uppercase" role="tablist">
                            <li className="nav-item">
                                <a href="login" className="nav-link">
                                    Log In
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="register" className="nav-link active">
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
                                    <label>Name *</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        name="name"
                                        required="required"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
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
                                    <div className="form-group mb-5">
                                    <label>Password *</label>
                                        <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        name="password"
                                        required="required"
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <p>
                                        Your personal data will be used to support your experience throughout this
                                        website, to manage access to your account, and for other purposes described
                                        in our{" "}
                                        <a href="#privacyPolicy" className="text-primary">
                                        privacy policy
                                        </a>
                                    </p>
                                    <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                                        <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        name="privacy"
                                        required="required"
                                        />
                                        <label htmlFor="remember" className="font-size-md">
                                        I agree to the{" "}
                                        <a href="#privacy" className="text-primary font-size-md">
                                            privacy policy
                                        </a>
                                        </label>
                                    </div>
                                    <div className="form-group mb-5 row">
                                        <input type="submit" value="Register"  className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                            </div>
                            <p className="text-center">Sign in with social account</p>
                            <div className="social-icons social-icon-border-color d-flex justify-content-center">
                            <a href="#facebook" className="social-icon social-facebook w-icon-facebook" />
                            <a href="#twitter" className="social-icon social-twitter w-icon-twitter" />
                            <a href="#google" className="social-icon social-google w-icon-google" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
        
    );
}

export default Register;