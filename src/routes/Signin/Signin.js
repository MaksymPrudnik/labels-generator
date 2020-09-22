import React from 'react';
import './Signin.css';
import CredentialsBox from '../../components/CredentialsBox/CredentialsBox'

const Signin = ({setLogin}) => (
    <div>
        <CredentialsBox setLogin={setLogin} />
    </div>
)

export default Signin;