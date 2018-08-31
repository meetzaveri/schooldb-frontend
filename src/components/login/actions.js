export const login_actions = {
    LoginActionRequested: 'login/LOGIN_USER_REQUESTED',
    LoginActionSucceded: 'login/LOGIN_USER_SUCCEEDED',
    LoginActionFailed: 'login/LOGIN_USER_FAILED'
}

export const login_request = (params) => ({type: login_actions.LoginActionRequested, payload: params});
export const login_success = (data) => ({type: login_actions.LoginActionSucceded, payload: data});
export const login_failed = (err) => ({type: login_actions.LoginActionFailed, payload: err});