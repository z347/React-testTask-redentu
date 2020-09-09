import { combineReducers } from 'redux';
import toolbarReducer from './Toolbar.reducer';

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
});

export default rootReducer;
