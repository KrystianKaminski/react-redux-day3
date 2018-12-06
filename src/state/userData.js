import { database } from '../firebaseConfig'

const TEXT_VALUE = 'userData/TEXT_VALUE'

export const inputChangeAction = text => ({
    type: TEXT_VALUE,
    text
})

export const saveTextToDbAsyncAction = () => (dispatch, getState) => {

    const { userData: { text },
        auth: { user: { uid: uuid } }
    } = getState()

    database.ref(`users/${uuid}`).set({
        text
    })
}

const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_VALUE:
            return {
                ...state,
                text: action.text
            }

        default:
            return state
    }
}