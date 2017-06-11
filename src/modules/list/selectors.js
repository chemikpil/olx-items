import { createSelector } from 'reselect';

const getItems = state => state.store.list;
const getPageIDs = state => state.store.pagination && state.store.pagination.get('pages');

export const getPage = state => state.store.pagination && state.store.pagination.get('currentPage');

export const getItemOnCurrentPage = createSelector(
    [getItems, getPageIDs, getPage],
    (items, ids, page) => items.filter(item => ids[page-1].find(id => id === item.id))
);
