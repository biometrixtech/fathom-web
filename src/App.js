// import React specific components
import React from 'react';

// import third-party libraries
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// import components
import { ChangeEmail, NoSeats, SignUp, SuccessJoin, SuccessLogin, Verified, } from './components';

const App = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={SignUp} />
            <Route path={'/success_login'} component={SuccessLogin} />
            <Route path={'/success_join'} component={SuccessJoin} />
            <Route path={'/no_seats'} component={NoSeats} />
            <Route path={'/email_verified'} component={Verified} />
            <Route path={'/change_email'} component={ChangeEmail} />
        </div>
    </Router>
);

export default App;
