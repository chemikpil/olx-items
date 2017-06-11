import { combineReducers } from 'redux';
import { reducers } from './list';

const appReducers = combineReducers({
    store: reducers
});

export default appReducers;
