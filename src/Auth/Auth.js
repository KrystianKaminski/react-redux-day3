import React from 'react'

import { auth, googleProvider } from '../firebaseConfig'

import FloatingActionButton from 'material-ui/FloatingActionButton'

import Forms from './Forms'

import { connect } from 'react-redux'
import { initAuthChangeListeningAction } from '../state/auth';


class Auth extends React.Component {

    state = {
        email: '',
        password: '',
    }



    componentDidMount() {
       this.props._initAuthChangeListeningAction()
    }


    emailHandler = e => {
        this.setState({ email: e.target.value })
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value })
    }

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('Something is wrong! Check console for error details')
                console.log(error)
            })
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
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
                        onClick={this.onLogOutClickHandler}
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
                    onLogGoogle={this.onLogInByGoogleClick}
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
    _initAuthChangeListeningAction: () => dispatch(initAuthChangeListeningAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)