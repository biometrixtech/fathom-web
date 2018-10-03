// import React specific components
import React, { Component } from 'react';

// import assets
import logo from '../assets/logo.png';
import '../styles/App.css';

// import third-party libraries
import { Button, Form, } from 'semantic-ui-react';
import _ from 'lodash';

// import global components
import { AppUtils, } from '../global/utils/';

// import components
import { EmailConfirmation, } from './';

class ChangeEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:       '',
            form_inputs: {
                current_email: 'test4@fathomai.com',
                new_email:     'test4@fathomai.com',
            },
            loading: false,
            page:    'change',
        };
    }

    _handleFormChange = e => {
        let newFormInputs = _.update(this.state.form_inputs, e.target.name, () => e.target.value);
        this.setState({ form_inputs: newFormInputs, });
    }

    _handleFormSubmit = () => {
        if(!AppUtils.isEmailValid(this.state.form_inputs.current_email) || !AppUtils.isEmailValid(this.state.form_inputs.new_email)) {
            this.setState({ error: 'YOUR EMAIL MUST BE A VALID EMAIL FORMAT', });
        } else if(this.state.form_inputs.current_email !== this.state.form_inputs.new_email) {
            this.setState({ error: 'YOUR EMAIL ADDRESSES DO NOT MATCH', });
        } else {
            this.setState(
                { loading: true, },
                () => setTimeout(() => this.setState({ loading: false, page: 'confirmation', }), 3000),
            );
        }
    }

    render = () => {
        let { current_email, new_email, } = this.state.form_inputs;
        return (
            <div className={'App'}>
                { this.state.page === 'change' ?
                    <header className={'App-header'}>
                        <img
                            alt={'logo'}
                            className={'App-logo'}
                            src={logo}
                        />
                        <h2>{'CHANGE ACCOUNT EMAIL'}</h2>
                        { this.state.error !== '' ?
                            <div className={'error-wrapper'}>
                                <p className={'error-text'}>{this.state.error}</p>
                            </div>
                            :
                            <div />
                        }
                        <p>{'Your email will be used for login and account management. Verfication must be complete.'}</p>
                        <Form>
                            <Form.Field>
                                <label className={'form-label'}>{'current email'}</label>
                                <input
                                    onChange={this._handleFormChange}
                                    name={'current_email'}
                                    placeholder={'current email'}
                                    required={true}
                                    type={'email'}
                                    value={current_email}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label className={'form-label'}>{'new email'}</label>
                                <input
                                    onChange={this._handleFormChange}
                                    name={'new_email'}
                                    placeholder={'new email'}
                                    required={true}
                                    type={'email'}
                                    value={new_email}
                                />
                            </Form.Field>
                        </Form>
                        <Button loading={this.state.loading} onClick={this._handleFormSubmit}>{'Send Verification'}</Button>
                    </header>
                    :
                    <EmailConfirmation
                        email={'help@fathomai.com'}
                        loading={this.state.loading}
                    />
                }
            </div>
        );
    }
}

export default ChangeEmail;
