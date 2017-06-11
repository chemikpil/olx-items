import { combineReducers } from 'redux';

const list = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const reducers = combineReducers({
    list, 
    isFetching
});
