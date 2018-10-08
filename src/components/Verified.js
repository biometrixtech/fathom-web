// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

// import components
import { AppLinks, } from './';

class Verified extends Component {
    render = () => {
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{'YOU\'RE EMAIL HAS BEEN VERIFIED'}</h2>
                    <p className={'subtitle roboto-normal'}>{'Download the app to get started'}</p>
                    <AppLinks />
                </header>
            </div>
        );
    }
}

export default Verified;
