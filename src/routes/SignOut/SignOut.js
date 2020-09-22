import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'


const SignOut = ({setLogin}) => {
    localStorage.removeItem('token')
    useEffect(() => setLogin('', false))
    return <Redirect to='/'/>
}

export default SignOut