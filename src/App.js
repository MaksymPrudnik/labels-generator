import React, { useEffect, useState } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, Link
} from 'react-router-dom';

import Signin from './routes/Signin/Signin';
import GeneratePdf from './components/Form/FormA7';
import Register from './routes/Register/Register';
import SignOut from './routes/SignOut/SignOut';
import Loader from './components/Loader/Loader';

function App() {
    const [isPending, setIsPending] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('');
    const setLogin = (email, isLoggedIn) => {
        setIsLoggedIn(isLoggedIn)
        setUser(email)
    }

    useEffect(() => {
        if (!isLoggedIn) {
            const token = localStorage.getItem('token');
            if (token) {
                setIsPending(true)
                fetch(`${process.env.REACT_APP_HOST || 'http://localhost:3000'}/signin`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                })
                .then(response => {
                    if (response.status === 400 || !response.ok) {
                        return Promise.reject('Unable to sign in with token')
                    }
                    return response.json()
                })
                .then(email => {
                    setUser(email.email)
                    setIsLoggedIn(true)
                    return setIsPending(false)
                })
                .catch(console.log)
            } else { setIsPending(false) }
        } else { setIsPending(false) }
    }, [isLoggedIn])

    return isPending
    ? <Loader />
    : (
        <Router>
            {isLoggedIn && 
                <div style={{
                    display: 'flex', justifyContent: 'space-evenly', 
                    fontSize: '1.2rem', color: 'white',
                    backgroundColor: 'black',
                    padding: '1rem'
                }}>
                    <h1 style={{textAlign: 'center'}}>Logged with {user}</h1>
                    <Link to='logout' style={{color: 'white', fontWeight: 700}}>Log out</Link>
                </div> 
            }
            <Switch>
                <Route exact path='/'>
                    {isLoggedIn ? <Redirect to='/generate-pdf'/> : <Redirect to='/signin'/>}
                </Route>
                <Route path='/generate-pdf'>
                    {isLoggedIn ? <GeneratePdf /> : <Redirect to='/signin'/>}
                </Route>
                <Route path='/signin'>
                    <Signin setLogin={setLogin}/>
                </Route>
                <Route path='/register'>
                    <Register setLogin={setLogin}/>
                </Route>
                <Route path='/logout'>
                    <SignOut setLogin={setLogin}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
