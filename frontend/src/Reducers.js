import { combineReducers } from 'redux';

import userReducer from './reducers/userRedurcer';

export default combineReducers({
    user: userReducer
});