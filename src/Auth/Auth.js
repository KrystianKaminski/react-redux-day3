import React from 'react'



import FloatingActionButton from 'material-ui/FloatingActionButton'

import Forms from './Forms'

import { connect } from 'react-redux'
import {
    initAuthChangeListeningAsyncAction,
    logOutAsyncAction,
    logInByGoogleAsyncAction,
    logIn
} from '../state/auth'


class Auth extends React.Component {

    state = {
        email: '',
        password: '',
    }



    componentDidMount() {
        this.props._initAuthChangeListeningAsyncAction()
    }


    emailHandler = e => {
        this.setState({ email: e.target.value })
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value })
    }

    onLogInClick = () => {
        this.props._logIn(this.state.email, this.state.password)
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
                    emailHandler={this.emailHandler}
                    passwordHandler={this.passwordHandler}
                    onLogIn={this.onLogInClick}
                    onLogGoogle={this.props._logInByGoogleAsyncAction}
                    emailValue={this.state.email}
                    passwordValue={this.state.password}
                />
        )
    }
}

const mapStateToProps = state => ({
    _isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
    _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
    _logIn: (email, password) => dispatch(logIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)