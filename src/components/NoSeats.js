// import React specific components
import React, { Component } from 'react';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

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
                    <h2 className={'oswald-normal'}>{'ALL SEATS ARE TAKEN'}</h2>
                    <p className={'subtitle roboto-normal'}>{'Reach out to BUYER NAME to increase the number of subscriptions available, or purchase a new subscription.'}</p>
                    <Button
                        className={'fathom-button roboto-normal'}
                        onClick={() =>
                            window.open(
                                'https://www.fathomai.com/shop/',
                                '_blank'
                            )
                        }
                        type={'button'}
                    >
                        {'Store'}
                    </Button>
                </header>
            </div>
        );
    }
}

export default NoSeats;
