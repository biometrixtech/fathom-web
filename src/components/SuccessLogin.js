// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

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
                    <h2>{'SUCCESS: YOU\'RE LINKED!'}</h2>
                    <p>{'Login to your app to access your greater functionality, and say thanks to BUYER NAME!'}</p>
                    <a
                        className={"App-link"}
                        href={"https://www.fathomai.com"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                      {'Open App'}
                    </a>
                </header>
            </div>
        );
    }
}

export default SuccessLogin;
