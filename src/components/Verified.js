// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

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
                    <h2>{'YOU\'RE EMAIL HAS BEEN VERIFIED'}</h2>
                    <p>{'Download the app to get started'}</p>
                    <Button>{'GET IT ON GOOGLE PLAY STORE - IMG COMING SOON!'}</Button>
                    <Button>{'DOWNLOAD ON THE APP STORE - IMG COMING SOON!'}</Button>
                </header>
            </div>
        );
    }
}

export default Verified;
