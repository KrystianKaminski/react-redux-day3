import React from 'react'

import { connect } from 'react-redux'
import { inputChangeAction, saveInDatabase } from './state/userData';

const UserData = (props) => (
    <div>
        <input
            value={props._userData}
            onChange={props._inputChangeAction}
        />
        <button
            onClick={props._saveToDatabase}
        >
            Add value
        </button>
    </div>
)

const mapStateToProps = state => ({
    _userText: state.userData.text
})

const dispatchToProps = dispatch => ({
    _inputChangeAction: (event) => dispatch(inputChangeAction(event.target.value)),
    _saveToDatabase: () => dispatch(saveInDatabase())
})


export default connect(
    mapStateToProps,
    dispatchToProps
)(UserData)