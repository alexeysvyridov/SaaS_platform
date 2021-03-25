import {createStore, applyMiddleware, Store,} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
export const store:Store = createStore(reducer, applyMiddleware(thunk))