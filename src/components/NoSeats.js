// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

class NoSeats extends Component {
    render = () => {
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2>{'ALL SEATS ARE TAKEN'}</h2>
                    <p>{'Reach out to BUYER NAME to increase the number of subscriptions available, or purchase a new subscription.'}</p>
                    <a
                        className={"App-link"}
                        href={"https://www.fathomai.com"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                      {'Store'}
                    </a>
                </header>
            </div>
        );
    }
}

export default NoSeats;
