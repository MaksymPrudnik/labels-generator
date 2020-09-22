import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import CredentialsBox from '../../components/CredentialsBox/CredentialsBox'

const Register = ({setLogin}) => (
    <div className='register-div'>
        <div className='register-box'>
            <h1>Register</h1>
            <CredentialsBox setLogin={setLogin} />
            <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
        </div>
    </div>
)

export default Register;