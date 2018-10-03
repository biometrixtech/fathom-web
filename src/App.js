import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        alt={"logo"}
                        className={"App-logo"}
                        src={logo}
                    />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a
                        className={"App-link"}
                        href={"https://reactjs.org"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                      {'Learn React!'}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
