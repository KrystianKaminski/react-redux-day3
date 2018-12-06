import { database } from '../firebaseConfig'

const TEXT_VALUE = 'userData/TEXT_VALUE'

export const inputChangeAction = text => ({
    type: TEXT_VALUE,
    text
})

export const saveInDatabase = () => (dispatch, getState) => {
    
    const { userData: { text }} = getState()
    
    database.ref('user').push({
        text
    })
}

const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TEXT_VALUE:
            return {
                ...state,
                text: action.text
            }
        
        default:
            return state
    }
}