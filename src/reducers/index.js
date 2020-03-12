import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";


//state=>state._something
/* example
- state.auth
- state.form
- state.streams
 */
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})
