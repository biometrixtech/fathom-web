// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

// import components
import { EmailConfirmation, } from './';

class SuccessJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            page:    'join',
        };
    }

    _handleResendEmail = () => {
        this.setState(
            { loading: true, },
            () => setTimeout(() => this.setState({ loading: false, page: 'confirmation', }), 3000),
        );
    }

    render = () => {
        return (
            <div className={'App'}>
                { this.state.page === 'join' ?
                    <header className={'App-header'}>
                        <img
                            alt={'logo'}
                            className={'App-logo'}
                            src={logo}
                        />
                        <h2>{'SUCCESS: YOU\'RE LINKED!'}</h2>
                        <p>{'Download the app and complete email verification.'}</p>
                        <Button>{'GET IT ON GOOGLE PLAY STORE - IMG COMING SOON!'}</Button>
                        <Button>{'DOWNLOAD ON THE APP STORE - IMG COMING SOON!'}</Button>
                        <div>
                            <Button loading={this.state.loading} onClick={this._handleResendEmail}>{'resend email'}</Button>
                            <Button disabled={this.state.loading} onClick={() => this.props.history.push('/change_email')}>{'change email'}</Button>
                        </div>
                    </header>
                    :
                    <EmailConfirmation
                        email={'help@fathomai.com'}
                        handleChangeEmailClicked={() => this.props.history.push('/change_email')}
                        handleResendEmailClicked={this._handleResendEmail}
                        loading={this.state.loading}
                    />
                }
            </div>
        );
    }
}

export default SuccessJoin;
