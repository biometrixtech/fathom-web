// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, Form, } from 'semantic-ui-react';
import _ from 'lodash';

// import global components
import { AppUtils, } from '../global/utils';
import { UserActions, } from '../actions';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:       '',
            form_inputs: {
                email:    'test4@fathomai.com',
            },
        };
    }

    _handleFormChange = e => {
        let newFormInputs = _.update(this.state.form_inputs, e.target.name, () => e.target.value);
        this.setState({ form_inputs: newFormInputs, });
    }

    _handleForgotPasswordFormSubmit = e => {
        const { email, } = this.state.form_inputs;
        let formValidation = AppUtils.isForgotPasswordFormValid(email);
        if(formValidation.isValid) {
            // TODO: START USING API CALLS
            UserActions.forgotPassword(email)
                .then(res => console.log('res',res))
                .catch(err => console.log('err',err));
            if(AppUtils.tmpJoinFunction(email).success) {
                // success redirect to success you're linked page
                this.setState({ error: '', });
                this.props.history.push('/reset_password');
            } else {
                this.setState({ error: AppUtils.tmpJoinFunction(email).errorMsg, });
            }
        } else {
            this.setState({ error: formValidation.errorMsg, });
        }
    }

    render = () => {
        let { email, } = this.state.form_inputs;
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{'RESET PASSWORD'}</h2>
                    { this.state.error !== '' ?
                        <div className={'error-wrapper'}>
                            <p className={'error-text oswald-normal'}>{this.state.error}</p>
                        </div>
                        :
                        <div />
                    }
                    <p className={'subtitle roboto-normal'}>{'Enter your email to receive a 6-digit pin to create a new password.'}</p>
                    <Form className={'fathom-form'}>
                        <Form.Field>
                            <input
                                autoComplete={'email'}
                                className={'fathom-input roboto-normal'}
                                onChange={this._handleFormChange}
                                name={'email'}
                                placeholder={'email'}
                                required={true}
                                type={'email'}
                                value={email}
                            />
                        </Form.Field>
                        <Button
                            className={'fathom-button roboto-normal'}
                            onClick={this._handleForgotPasswordFormSubmit}
                            type={'button'}
                        >
                            {'Reset'}
                        </Button>
                    </Form>
                </header>
            </div>
        );
    }
}

export default ForgotPassword;
