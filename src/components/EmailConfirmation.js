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

// import components
import { AppLinks, } from './';

class EmailConfirmation extends Component {
    render = () => {
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{`CONFIRMATION EMAIL SENT TO ${this.props.email}`}</h2>
                    <p className={'subtitle roboto-normal'}>{'Check your inbox and span folders for an email from Fathom. This may take a few minutes.'}</p>
                    <AppLinks />
                    <div style={{paddingTop: 100,}}>
                        { this.props.handleResendEmailClicked ?
                            <Button className={'button-link'} loading={this.props.loading} onClick={this.props.handleResendEmailClicked} style={{marginRight: 75,}}>{'resend email'}</Button>
                            :
                            null
                        }
                        { this.props.handleChangeEmailClicked ?
                            <Button className={'button-link'} disabled={this.props.loading} onClick={this.props.handleChangeEmailClicked}>{'change email'}</Button>
                            :
                            null
                        }
                    </div>
                </header>
            </div>
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
