// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

// import components
import { AppLinks, EmailConfirmation, } from './';

// import global components
import { UserActions, } from '../actions';

class SuccessJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:   '',
            loading: false,
            page:    'join',
        };
    }

    _handleResendEmail = () => {
        // TODO: START USING API CALLS
        UserActions.resendEmail(this.state.mail)
            .then(res => console.log('res',res))
            .catch(err => console.log('err',err));
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
                        <h2 className={'oswald-normal'}>{'SUCCESS: YOU\'RE LINKED!'}</h2>
                        <p className={'subtitle roboto-normal'}>{'Download the app and complete email verification.'}</p>
                        <AppLinks />
                        <div className={'footer-wrapper'}>
                            <Button className={'button-link'} loading={this.state.loading} onClick={this._handleResendEmail}>{'resend email'}</Button>
                            <Button className={'button-link'} disabled={this.state.loading} onClick={() => this.props.history.push('/change_email')}>{'change email'}</Button>
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
