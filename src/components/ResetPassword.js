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

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:       '',
            form_inputs: {
                confirm_password: 'Fathom123!',
                email:            'test4@fathomai.com',
                new_password:     'Fathom123!',
                pin:              '123',
            },
        };
    }

    _handleFormChange = e => {
        let newFormInputs = _.update(this.state.form_inputs, e.target.name, () => e.target.value);
        this.setState({ form_inputs: newFormInputs, });
    }

    _handleResetPasswordFormSubmit = e => {
        const { confirm_password, email, new_password, pin, } = this.state.form_inputs;
        let formValidation = AppUtils.isResetPasswordFormValid(confirm_password, email, new_password, pin);
        if(formValidation.isValid) {
            // TODO: START USING API CALLS
            UserActions.resetPassword({
                email:             email,
                confirmation_code: pin,
                password:          new_password,
            })
                .then(res => console.log('res',res))
                .catch(err => console.log('err',err));
            if(AppUtils.tmpJoinFunction(email).success) {
                // success redirect to success you're linked page
                this.setState({ error: '', });
                this.props.history.push('/');
            } else {
                this.setState({ error: AppUtils.tmpJoinFunction(email).errorMsg, });
            }
        } else {
            this.setState({ error: formValidation.errorMsg, });
        }
    }

    render = () => {
        let { confirm_password, email, new_password, pin, } = this.state.form_inputs;
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{'SET NEW PASSWORD'}</h2>
                    { this.state.error !== '' ?
                        <div className={'error-wrapper'}>
                            <p className={'error-text oswald-normal'}>{this.state.error}</p>
                        </div>
                        :
                        <div />
                    }
                    <p className={'subtitle roboto-normal'}>{'You should receive a 6-digit pin by email. Please retreive that pin and enter your new password.'}</p>
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
                        <Form.Field>
                            <input
                                autoComplete={'off'}
                                className={'fathom-input roboto-normal'}
                                onChange={this._handleFormChange}
                                name={'pin'}
                                placeholder={'pin'}
                                required={true}
                                type={'text'}
                                value={pin}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                autoComplete={'new-password'}
                                className={'fathom-input roboto-normal'}
                                onChange={this._handleFormChange}
                                name={'new_password'}
                                placeholder={'new password'}
                                required={true}
                                type={'password'}
                                value={new_password}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                autoComplete={'new-password'}
                                className={'fathom-input roboto-normal'}
                                onChange={this._handleFormChange}
                                name={'confirm_password'}
                                placeholder={'confirm new password'}
                                required={true}
                                type={'password'}
                                value={confirm_password}
                            />
                        </Form.Field>
                        <Button
                            className={'fathom-button roboto-normal'}
                            onClick={this._handleResetPasswordFormSubmit}
                            type={'button'}
                        >
                            {'Confirm'}
                        </Button>
                    </Form>
                </header>
            </div>
        );
    }
}

export default ResetPassword;
