import React, { useState } from 'react';
import './CredentialsBox.css';
import { useForm } from 'react-hook-form';
import { Redirect, useLocation } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

const CredentialsBox = ({setLogin}) => {
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const {register, handleSubmit, errors} = useForm();
    let route = useLocation().pathname.slice(1);
    const onSubmit = (data) => {
        setIsPending(true);
        fetch(`${process.env.REACT_APP_HOST || 'http://localhost:3000'}/${route}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data})
        })
        .then(response => {
            if(response.status === 400 || !response.ok) {
                return Promise.reject(`Failed to ${route}`)
            }
            return response.json()
        })
        .then(userData => {
            localStorage.setItem('token', userData.token)
            setIsPending(false)
            setLogin(userData.email, true)
            return setSuccess(true)
        })
        .catch(err => {
            setIsPending(false)
            return console.log(err)
        })
    };
    if (Object.keys(errors).length) {
        console.log(errors);
    }
    return isPending
        ? <Loader />
        : <div>
            <form onSubmit={handleSubmit(onSubmit)} className='signin-container'>
                <input type="email" placeholder="email" name="email" ref={register({required: 'Provide an email'})} />
                <input type="password" name="password" ref={register({
                    required: 'Provide a password', 
                    minLength: {
                        value: 6,
                        message: 'At least 6 characters'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Max 30 characters'
                    },
                })} />

                <input type="submit" value={(route === 'signin' && 'Sign in') || (route === 'register' && 'Register')}/>
            </form>
            { success && <Redirect to='/'/> }
        </div>
}

export default CredentialsBox;