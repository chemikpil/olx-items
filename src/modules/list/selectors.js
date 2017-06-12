import { createSelector } from 'reselect';

const getItems = state => state.store.list;
const getPageIDs = state => state.store.pagination && state.store.pagination.get('pages');
const getItemById = (state, id) => state.store.list.find(item => item.id === id);

export const getPage = state => state.store.pagination && state.store.pagination.get('currentPage');

export const getPagesLength = createSelector(
    getPageIDs,
    pages => pages && pages.length
)

export const getItemOnCurrentPage = createSelector(
    [getItems, getPageIDs, getPage],
    (items, ids, page) => items.filter(item => ids[page-1].find(id => id === item.id))
);

export const getItemDetails = createSelector(
    getItemById,
    item => item
)