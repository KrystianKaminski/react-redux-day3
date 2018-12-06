
const TEXT_VALUE = 'TEXT_VALUE'

export const inputChangeAction = text => ({
    type: TEXT_VALUE,
    text
})

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