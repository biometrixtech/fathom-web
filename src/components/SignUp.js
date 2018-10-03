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
import utils from '../global/utils';

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
        let formValidation = utils.isLoginJoinFormValid(email, password, pin);
        if(formValidation.isValid) {
            if(utils.tmpJoinFunction(email).success) {
                // success redirect to success you're linked page
                this.setState({ error: '', });
                this.props.history.push('/success_join');
            } else {
                this.setState({ error: utils.tmpJoinFunction(email).errorMsg, });
            }
        } else {
            this.setState({ error: formValidation.errorMsg, });
        }
    }

    _handleLoginFormSubmit = () => {
        const { email, password, pin, } = this.state.form_inputs;
        let formValidation = utils.isLoginJoinFormValid(email, password, pin);
        if(formValidation.isValid) {
            if(utils.tmpLoginFunction(email).success) {
                // success, do something based on .nextPage
                this.setState({ error: '', });
                if(utils.tmpLoginFunction(email).nextPage) {
                    this.props.history.push(utils.tmpLoginFunction(email).nextPage);
                }
            } else {
                this.setState({ error: utils.tmpLoginFunction(email).errorMsg, });
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
                    <h2>{this.state.page === 'join' ? 'JOIN' : 'LOG IN'}</h2>
                    { this.state.error !== '' ?
                        <div className={'error-wrapper'}>
                            <p className={'error-text'}>{this.state.error}</p>
                        </div>
                        :
                        <div />
                    }
                    <p>{'to access subscription.'}</p>
                    <Form>
                        <Form.Field>
                            <label className={'form-label'}>{'pin'}</label>
                            <input
                                onChange={this._handleFormChange}
                                name={'pin'}
                                placeholder={'pin'}
                                required={true}
                                type={'text'}
                                value={pin}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className={'form-label'}>{'email'}</label>
                            <input
                                onChange={this._handleFormChange}
                                name={'email'}
                                placeholder={'email'}
                                required={true}
                                type={'email'}
                                value={email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className={'form-label'}>{'password'}</label>
                            <input
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
                                className={'App-link'}
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
                            onClick={this.state.page === 'join' ? this._handleJoinFormSubmit : this._handleLoginFormSubmit}
                            type={'button'}
                        >
                            {this.state.page === 'join' ? 'Join' : 'Login'}
                        </Button>
                        { this.state.page === 'join' ?
                            <p>
                                {'Already have an account? '}
                                <Link
                                    className={'App-link'}
                                    onClick={() => this._togglePageState('login')}
                                    to={'/'}
                                >
                                    {'Login'}
                                </Link>
                            </p>
                            :
                            <p>
                                {'Don\'t have an account? '}
                                <Link
                                    className={'App-link'}
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
