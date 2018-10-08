// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import components
import { AppLinks, } from './';

class SuccessLogin extends Component {
    render = () => {
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{'SUCCESS: YOU\'RE LINKED!'}</h2>
                    <p className={'subtitle roboto-normal'}>{'Login to your app to access your greater functionality, and say thanks to BUYER NAME!'}</p>
                    <AppLinks />
                </header>
            </div>
        );
    }
}

export default SuccessLogin;
