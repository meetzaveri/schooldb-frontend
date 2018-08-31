import {register_actions} from './actions';

export const registerreducer = (state = {
  data: [],
  onLoading: false,
  onLoadingFormSubmit: false,
  error: ''
}, action) => {
  switch (action.type) {

    case register_actions.RegisterActionRequested:
      state = {
        ...state,
        onLoading: true
      }
      return state;

    case register_actions.RegisterActionSucceded:

      console.log('Action in register request success', action);
      let registerSuccess = action.data;
      if (registerSuccess) {
        state = {
          ...state,
          data: registerSuccess,
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

    case register_actions.RegisterActionFailed:
      state = {
        ...state,
        data: [],
        onLoading: false,
        error: 'Error in register user action'
      }
      console.log('Action in register request fail', action);
      return state;

    default:
      state = {
        ...state
      }
      return state
  }

}