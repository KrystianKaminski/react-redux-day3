import React from 'react'

import { TextField, RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper'


const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    margin: 20
}


const Forms = (props) => (
    <div>
        <Paper
            style={style}
        >
            <div>
                <TextField
                    name="email"
                    type="email"
                    floatingLabelText="E-Mail"
                    fullWidth
                    value={props.emailValue}
                    onChange={props.emailHandler}
                />
            </div>

            <div>
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    onChange={props.passwordHandler}
                    value={props.passwordValue}
                    fullWidth
                />
            </div>
            <RaisedButton
                label="Login"
                primary={true}
                onClick={props.onLogIn}
                fullWidth
            />
            <RaisedButton
                label="Login by Google"
                onClick={props.onLogGoogle}
                fullWidth
            />
        </Paper>
    </div>
)


export default Forms