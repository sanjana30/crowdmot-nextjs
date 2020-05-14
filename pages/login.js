import { useState, useReducer } from 'react'
import Button from '../components/Button.js'
import Field from '../components/Field.js'
import Input from '../components/Input.js'
import Label from '../components/Label.js'
import EmailService from '../services/email.js'

function reducer(state, action) {
    let error;
    switch (action.type) {
        case 'update-name':
            error = action.value?.length < 2 ? 'not valid' : undefined
            return { ...state, name: action.value, errors: { ...state.errors, name: error } };
        case 'update-email':
            error = !EmailService.valid(action.value) ? 'not valid' : undefined
            return { ...state, email: action.value, errors: { ...state.errors, email: error } };
        case 'update-password':
            error = action.value?.length < 7 ? 'too short' : undefined
            return { ...state, password: action.value, errors: { ...state.errors, password: error } };
        default:
            return state;
    }
    return state;
}

export default (props) => {
    const [isSignUp, setIsSignUp] = useState(false);
    //{name: String, password: String, email: String, error: {name, password, email}}

    const [state, dispatch] = useReducer(reducer, {});
    const hasError = () => {
        if (isSignUp) {
            //check name, email, password
            return (
                    !(state.name && state.email && state.password) || 
                    state.errors.name != undefined || state.errors.email != undefined || state.errors.password != undefined
                    // Object.values(state.errors ?? {}).filter(Boolean).length > 0
            );
        } else {
            
            //check email , password
            return (
                    !(state.email && state.password) || 
                    state.errors.email != undefined || state.errors.password != undefined
                    // Object.values(state.errors ?? {}).filter(Boolean).length >0
                    );
        }
    }

    return <>
        <div className="page">
            <div className="form">
                {isSignUp && (
                    <>
                        <Field>
                            <Label error={state.errors?.name}> Name</Label>
                            <Input name="name" type="text" value={state.name} onChange={({ target }) => dispatch({ type: 'update-name', value: target.value })} />
                        </Field>
                    </>
                )}
                <Field>
                    <Label error={state.errors?.email}> Email</Label>
                    <Input name="email" type="email" value={state.email} onChange={({ target }) => dispatch({ type: 'update-email', value: target.value })} />
                </Field>
                <Field>
                    <Label error={state.errors?.password}> Password</Label>
                    <Input name="password" type="password" value={state.password} onChange={({ target }) => dispatch({ type: 'update-password', value: target.value })} />
                </Field>
                <Button disabled={hasError()}>{isSignUp ? "Sign up" : "Log in"}</Button>
                <p className="log-in-prompt">
                    {isSignUp ? "Have" : "Need"} an account?
                            <span className="small">
                        Click below, fill out the form, et voila!
                            </span>
                </p>
                <Button   onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Log in" : "Sign up"}
                </Button>
                <p className="error">{"errors?.auth"} </p>
            </div>
        </div>
        <style jsx>{`
        .error {
          text-align: center;
          color: var(--error);
        }
        .page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .log-in-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 0.25rem;
        }
        .log-in-prompt > .small {
          font-size: 0.75rem;
          opacity: 0.6;
        }
        .form {
          display: flex;
          flex-direction: column;
          width: 300px;
        }
        .form > :global(.field),
        .form > :global(.btn) {
          margin-bottom: 0.5rem;
        }
      `}</style>


    </>
}