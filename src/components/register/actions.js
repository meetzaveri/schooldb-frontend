export const register_actions = {
    RegisterActionRequested: 'register/REGISTER_USER_REQUESTED',
    RegisterActionSucceded: 'register/REGISTER_USER_SUCCEEDED',
    RegisterActionFailed: 'register/REGISTER_USER_FAILED'
}

export const register_request = (params) => ({type: register_actions.RegisterActionRequested, payload: params});
export const register_success = (data) => ({type: register_actions.RegisterActionSucceded, payload: data});
export const register_failed = (err) => ({type: register_actions.RegisterActionFailed, payload: err});