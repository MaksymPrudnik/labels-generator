import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import GeneratePdf from './components/Form/FormA7'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {isLoggedIn && <Redirect to='/generate-pdf'/>}
                </Route>
                <Route to='/generate-pdf'>
                    <GeneratePdf />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
