import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataApi } from './api';
import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_SUCCESS
} from './actions';

function* fetchData() {
    try {
        const data = yield call(fetchDataApi);
        yield put({type: FETCH_ITEMS_SUCCESS, data});
    } catch (e) {
        yield put({type: FETCH_ITEMS_FAILURE});
    }
};

export const fetchDataSaga = function* () {
    yield takeLatest(FETCH_ITEMS_REQUEST, fetchData);
};
