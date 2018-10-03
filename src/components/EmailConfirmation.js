/**
 * Email Confirmation
 *
    <EmailConfirmation
        email={'help@fathomai.com'}
        handleChangeEmailClicked={() => this.props.history.push('/change_email')}
        handleResendEmailClicked={this._handleResendEmail}
        loading={this.state.loading}
    />
 *
 */

// import React specific components
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, } from 'semantic-ui-react';

class EmailConfirmation extends Component {
    render = () => {
        return (
            <header className={'App-header'}>
                <img
                    alt={'logo'}
                    className={'App-logo'}
                    src={logo}
                />
                <h2>{`CONFIRMATION EMAIL SENT TO ${this.props.email}`}</h2>
                <p>{'Check your inbox and span folders for an email from Fathom. This may take a few minutes.'}</p>
                <Button>{'GET IT ON GOOGLE PLAY STORE - IMG COMING SOON!'}</Button>
                <Button>{'DOWNLOAD ON THE APP STORE - IMG COMING SOON!'}</Button>
                <div>
                    { this.props.handleResendEmailClicked ?
                        <Button loading={this.props.loading} onClick={this.props.handleResendEmailClicked}>{'resend email'}</Button>
                        :
                        null
                    }
                    { this.props.handleChangeEmailClicked ?
                        <Button disabled={this.props.loading} onClick={this.props.handleChangeEmailClicked}>{'change email'}</Button>
                        :
                        null
                    }
                </div>
            </header>
        );
    }
}

EmailConfirmation.propTypes = {
    email:                    PropTypes.string.isRequired,
    handleChangeEmailClicked: PropTypes.func,
    handleResendEmailClicked: PropTypes.func,
    loading:                  PropTypes.bool.isRequired,
}

export default EmailConfirmation;
