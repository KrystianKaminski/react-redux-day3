const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'

export const initAuthChangeListeningAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                this.setState({ isUserLoggedIn: true })
            } else {
                this.setState({ isUserLoggedIn: false })
            }
        }
    )
}

const logInAction = () => ({
    type: LOG_IN
})

const logOutAction = () => ({
    type: LOG_OUT
})

const INITIAL_STATE = {
    isUserLoggedIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {


        default:
            return state
    }
}