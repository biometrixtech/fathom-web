// import React specific components
import React from 'react';

// import third-party libraries
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// import components
import { ChangeEmail, ForgotPassword, NoSeats, ResetPassword, SignUp, SuccessJoin, SuccessLogin, Verified, } from './components';

// import AWS specific components
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const App = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={SignUp} />
            <Route path={'/success_login'} component={SuccessLogin} />
            <Route path={'/success_join'} component={SuccessJoin} />
            <Route path={'/no_seats'} component={NoSeats} />
            <Route path={'/email_verified'} component={Verified} />
            <Route path={'/change_email'} component={ChangeEmail} />
            <Route path={'/forgot_password'} component={ForgotPassword} />
            <Route path={'/reset_password'} component={ResetPassword} />
        </div>
    </Router>
);

export default App;
