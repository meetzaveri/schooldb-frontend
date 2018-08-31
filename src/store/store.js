import {combineReducers} from 'redux';
import {loginreducer} from '../components/login/reducer';
import {registerreducer} from '../components/register/reducer';

let rootReducer = combineReducers({login: loginreducer, register: registerreducer});

export default rootReducer;
