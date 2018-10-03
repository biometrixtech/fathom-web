// import React specific components
import React from 'react';

// import third-party libraries
import { BrowserRouter as Router, Route, } from 'react-router-dom';

// import components
import { NoSeats, SignUp, Success, } from './components';

const App = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={SignUp} />
            <Route path={'/success'} component={Success} />
            <Route path={'/no_seats'} component={NoSeats} />
        </div>
    </Router>
);

export default App;
