import {login_actions as lg_a} from './actions';

export const loginreducer = (state = {
  data: [],
  onLoading: false,
  onLoadingFormSubmit: false,
  role: '',
  error: ''
}, action) => {
  switch (action.type) {

    case lg_a.LoginActionRequested:
      state = {
        ...state,
        onLoading: true
      }
      return state;

    case lg_a.LoginActionSucceded:

      console.log('Action in login request success', action);
      let loginOnSuccess = action.payload;
      if (loginOnSuccess) {
        state = {
          ...state,
          data: loginOnSuccess,
          onLoading: false
        }

        return state;
      } else {
        state = {
          ...state,
          data: [],
          onLoading: false
        }
        return state;
      }

    case lg_a.LoginActionFailed:
      state = {
        ...state,
        data: [],
        onLoading: false,
        error: 'Error in login user action'
      }
      console.log('Action in login request fail', action);
      return state;

    default:
      state = {
        ...state
      }
      return state
  }

}