import {createStore, applyMiddleware,combineReducers, Store} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const rootReducer = combineReducers({
    reducer
});
export const store:Store = createStore(rootReducer, applyMiddleware(thunk))