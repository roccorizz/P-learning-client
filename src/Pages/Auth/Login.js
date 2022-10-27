import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Auth.css';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Context/AuthProvider';
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState(null);
    const { loginUser, setLoading, providerLogin, forgetPassword } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            }
            )
            .catch((error) => {
                console.error(error);
            })

    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            }
            )
            .catch((error) => {
                console.error(error);
            })
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleUserEmail = (event) => {
        const useremail = event.target.value;
        setUserEmail(useremail);


    }
    const handleForgetPassword = () => {
        if (!userEmail) {
            toast.error('Please write down your Email!');
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast.success('password reset email sent');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    // const handleForgetPassword = (userEmail) => {
    //     // console.log('hello world')
    //     if(userEmail == null){
    //         setError('Please write down your Email');
    //     }
    //     else{
    //         forgetPassword(userEmail)
    //         .then(() => {
    //             console.log('hello');
    //             toast.success('Password reset Email has been send!');
    //         })
    //         .catch((error) => {
    //             console.log(error.message)
    //             setError(error.message);
    //         });
    //     }
    // }
    return (
        <div>
            <div className='container login'>
                <h2 className='text-center' style={{ fontWeight: '600', color: '#1E2F50' }}>Login</h2>
                <div className='card w-50 mx-auto mb-5'>

                    <Form className='p-4' onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleUserEmail} name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Text className="text-danger fs-5">
                            {error}
                        </Form.Text>
                        <div className='d-flex justify-content-between'>
                            <p>Remember me</p>
                            <p style={{ cursor: 'pointer' }} onClick={handleForgetPassword}>Forget Password ?</p>
                        </div>
                        <div className='d-flex justify-content-between g-2'>
                            <button type="submit" className='btn btnlog btn-success' style={{ width: '45%' }}>
                                Login
                            </button>


                            <Link to='/register' style={{ width: '45%' }} className='btn btn-secondary'>   Register  </Link>


                        </div>
                    </Form>
                    <div className='mt-1 mb-1 ps-4 pe-4 pb-4'>
                        <p className='text-center'>Or, LogIn With</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn text-light' onClick={handleGoogleSignIn} style={{ width: '48%', fontSize: '15px', backgroundColor: '#6b4fbb' }}><FaGooglePlusG className='fs-3 google'></FaGooglePlusG> Continue With Google</button>
                            <button className='btn btn-dark' onClick={handleGithubSignIn} style={{ width: '48%' }}> <FaGithub className='fs-3 github'></FaGithub> Continue With Github</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;