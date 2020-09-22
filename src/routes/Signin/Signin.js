import React from 'react';
import './Signin.css';
import CredentialsBox from '../../components/CredentialsBox/CredentialsBox'
import { Link } from 'react-router-dom';

const Signin = ({setLogin}) => (
    <div className='signin-div'>
        <div className='signin-box'>
            <h1>Sign in</h1>
            <CredentialsBox setLogin={setLogin} />
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
)

export default Signin;