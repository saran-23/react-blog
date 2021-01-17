import {combineReducers} from 'redux';
import postsReducer from '../reducers/postReducers';
import UsersReducer from '../reducers/userReducers';
export default combineReducers({
    posts: postsReducer,
    users: UsersReducer,
});