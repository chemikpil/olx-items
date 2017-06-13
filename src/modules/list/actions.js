export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';

export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const FETCH_ITEMS_SUCCESS = 'FETCH_TODOS_SUCCESS';

export const fetchItemsSuccess = (data) => ({
    type: FETCH_ITEMS_SUCCESS,
    data
});

export const FETCH_ITEMS = 'FETCH_ITEMS';

export const fetchItems = () => (dispatch) => {
    dispatch({
        type: FETCH_ITEMS_REQUEST
    });
};

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
});