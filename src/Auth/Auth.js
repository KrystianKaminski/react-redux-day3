import React from 'react'



import FloatingActionButton from 'material-ui/FloatingActionButton'

import Forms from './Forms'

import { connect } from 'react-redux'
import {
    initAuthChangeListeningAsyncAction,
    logOutAsyncAction,
    logInByGoogleAsyncAction,
    logInAsyncAction,
    emailChangeAction,
    passwordChangeAction
} from '../state/auth'


class Auth extends React.Component {



    componentDidMount() {
        this.props._initAuthChangeListeningAsyncAction()
    }


    onLogInClick = () => {
        this.props._logInAsyncAction(this.state.email, this.state.password)
    }





    render() {
        return (
            this.props._isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            left: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}
                        secondary={true}
                        onClick={this.props._logOutAsyncAction}
                    >
                        X
                    </FloatingActionButton>
                    {this.props.children}
                </div>
                :
                <Forms
                    emailHandler={(e) => this.props._emailChangeAction(e.target.value)}
                    passwordHandler={(e) => this.props._passwordChangeAction(e.target.value)}
                    onLogIn={this.onLogInClick}
                    onLogGoogle={this.props._logInByGoogleAsyncAction}
                    emailValue={this.props._email}
                    passwordValue={this.props._password}
                />
        )
    }
}

const mapStateToProps = state => ({
    _isUserLoggedIn: state.auth.isUserLoggedIn,
    _email: state.auth.email,
    _password: state.auth.password
})

const mapDispatchToProps = dispatch => ({
    _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
    _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
    _logInAsyncAction: (email, password) => dispatch(logInAsyncAction(email, password)),
    _emailChangeAction: value => dispatch(emailChangeAction(value)),
    _passwordChangeAction: value => dispatch(passwordChangeAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)