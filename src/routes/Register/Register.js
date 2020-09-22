import React from 'react'
import './Register.css';
import CredentialsBox from '../../components/CredentialsBox/CredentialsBox'

const Register = ({setLogin}) => (
    <div>
        <CredentialsBox setLogin={setLogin} />
    </div>
)

export default Register;