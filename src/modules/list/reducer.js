import { combineReducers } from 'redux';
import { Map, List } from 'immutable';
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    CHANGE_PAGE
} from './actions';

const list = (state = List(), action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            const items = [];
            action.data.map(page => items.push(...page.ads.map(item => item)));
            return List([
                ...state,
                ...items
            ]);
        default:
            return state;
    }
};

const pagination = (state = Map({currentPage: 1, pages: []}), action) => {
    switch (action.type) {
        case FETCH_ITEMS_SUCCESS:
            const itemsId = action.data.map(page => page.ads.map(item => item.id));
            return itemsId.length ? state.set('pages', itemsId) : state;
        case CHANGE_PAGE:
            return state.set('currentPage', action.page);
        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return true;
        case FETCH_ITEMS_SUCCESS:
        case FETCH_ITEMS_FAILURE:
            return false;
        default:
            return state;
    }
};

export const reducers = combineReducers({
    list,
    pagination,
    isFetching
});
