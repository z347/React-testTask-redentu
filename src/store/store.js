import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/Root.reducer';

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer);
