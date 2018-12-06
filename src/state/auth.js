const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'

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