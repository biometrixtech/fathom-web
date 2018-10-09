// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, Form, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import _ from 'lodash';

// import global components
import { AppUtils, } from '../global/utils';
import { UserActions, } from '../actions';

// import AWS specific components
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:       '',
            form_inputs: {
                email:    'test4@fathomai.com',
                password: 'Fathom123!',
                pin:      '123',
            },
            page: 'join',
        };
        this.defaultFormInputs = {
            email:    '',
            password: '',
            pin:      '',
        };
    }

    _handleFormChange = e => {
        let newFormInputs = _.update(this.state.form_inputs, e.target.name, () => e.target.value);
        this.setState({ form_inputs: newFormInputs, });
    }

    _togglePageState = newPage => {
        // TODO: FIX THIS!
        // let newDefaultFormInputs = _.cloneDeep(this.defaultFormInputs);
        // this.setState({ form_inputs: newDefaultFormInputs, page: newPage, });
        this.setState({ page: newPage, });
    }

    _handleJoinFormSubmit = () => {
      const { email, password, pin, } = this.state.form_inputs;
        let formValidation = AppUtils.isLoginJoinFormValid(email, password, pin);
        if(formValidation.isValid) {
            if(AppUtils.tmpJoinFunction(email).success) {
                // success redirect to success you're linked page
                this.setState({ error: '', });
                this.props.history.push('/success_join');
            } else {
                this.setState({ error: AppUtils.tmpJoinFunction(email).errorMsg, });
            }
        } else {
            this.setState({ error: formValidation.errorMsg, });
        }
    }

    _handleLoginFormSubmit = () => {
        const { email, password, pin, } = this.state.form_inputs;
        let formValidation = AppUtils.isLoginJoinFormValid(email, password, pin);
        if(formValidation.isValid) {
            UserActions.loginUser(email, password)
                .then(res => console.log('res',res))
                .catch(err => console.log('err',err));

            if(AppUtils.tmpLoginFunction(email).success) {
                // success, do something based on .nextPage
                this.setState({ error: '', });
                if(AppUtils.tmpLoginFunction(email).nextPage) {
                    this.props.history.push(AppUtils.tmpLoginFunction(email).nextPage);
                }
            } else {
                this.setState({ error: AppUtils.tmpLoginFunction(email).errorMsg, });
            }
        } else {
            this.setState({ error: formValidation.errorMsg, });
        }
    }

    render = () => {
        let { email, password, pin, } = this.state.form_inputs;
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img
                        alt={'logo'}
                        className={'App-logo'}
                        src={logo}
                    />
                    <h2 className={'oswald-normal'}>{this.state.page === 'join' ? 'JOIN' : 'LOG IN'}</h2>
                    { this.state.error !== '' ?
                        <div className={'error-wrapper'}>
                            <p className={'error-text oswald-normal'}>{this.state.error}</p>
                        </div>
                        :
                        <div />
                    }
                    <p className={'subtitle roboto-normal'}>{'to access subscription.'}</p>
                    <Form className={'fathom-form'}>
                        <Form.Field>
                            <input
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
                                autoComplete={'current-password'}
                                className={'fathom-input roboto-normal'}
                                onChange={this._handleFormChange}
                                name={'password'}
                                placeholder={'password'}
                                required={true}
                                type={'password'}
                                value={password}
                            />
                        </Form.Field>
                        { this.state.page === 'login' ?
                            <Link
                                className={'App-link forgot-password-link roboto-normal'}
                                onClick={() => console.log('forgot password')}
                                to={'/'}
                            >
                                {'forgot password'}
                            </Link>
                            :
                            null
                        }
                        <br />
                        <Button
                            className={'fathom-button roboto-normal'}
                            onClick={this.state.page === 'join' ? this._handleJoinFormSubmit : this._handleLoginFormSubmit}
                            type={'button'}
                        >
                            {this.state.page === 'join' ? 'Join' : 'Log In'}
                        </Button>
                        { this.state.page === 'join' ?
                            <p className={'App-subtext roboto-normal'}>
                                {'Already have an account? '}
                                <Link
                                    className={'App-link fathom-yellow'}
                                    onClick={() => this._togglePageState('login')}
                                    to={'/'}
                                >
                                    {'Log In'}
                                </Link>
                            </p>
                            :
                            <p className={'App-subtext roboto-normal'}>
                                {'Don\'t have an account? '}
                                <Link
                                    className={'App-link fathom-yellow'}
                                    onClick={() => this._togglePageState('join')}
                                    to={'/'}
                                >
                                    {'Join'}
                                </Link>
                            </p>
                        }
                    </Form>
                </header>
            </div>
        );
    }
}

export default SignUp;
