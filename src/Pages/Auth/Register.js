import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Auth.css';

import { AuthContext } from '../../Context/AuthProvider';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL,email,password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUserUpdateProfile(name, photoURL);
                // handleEmailVerification();
                toast.success('Registration Successfull!');
                setLoading(false);
                navigate('/');

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })

        const handleUserUpdateProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL,
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(e => console.error(e))
        }

    }
    return (
        <div>
            <div className='container register'>
                <h2 className='text-center' style={{ fontWeight: '600', color: '#1E2F50' }}>Register</h2>
                <div className='card w-50 mx-auto mb-5'>

                    <Form className='p-4' onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>PhotoURL</Form.Label>
                            <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Text className="text-danger fs-5">
                            {error}
                        </Form.Text>

                        <div className='d-flex justify-content-between g-2'>
                            <button type="submit" className='btn btnlog btn-success' style={{ width: '45%' }}>
                                Register
                            </button>


                            <Link to='/login' className='btn btnreg btn-secondary' style={{ width: '45%' }}>   Login  </Link>


                        </div>

                    </Form>

                </div>

            </div>
        </div>
    );
};

export default Register;