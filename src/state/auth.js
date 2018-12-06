import { auth, googleProvider } from '../firebaseConfig'

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'

export const initAuthChangeListeningAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(logInAction())
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export const logInAsyncAction = (email, password) => (dispatch, getState) => {

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert('Something is wrong! Check console for error details')
            console.log(error)
        })
}

const logInAction = () => ({
    type: LOG_IN
})

export const emailChangeAction = value => ({
    type: EMAIL_CHANGE,
    value
})

export const passwordChangeAction = value => ({
    type: PASSWORD_CHANGE,
    value
})

const logOutAction = () => ({
    type: LOG_OUT
})

const INITIAL_STATE = {
    isUserLoggedIn: false,
    email: '',
    password: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false
            }

        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }

        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        default:
            return state
    }
}