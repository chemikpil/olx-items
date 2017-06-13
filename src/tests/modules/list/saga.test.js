import { takeLatest } from 'redux-saga/effects';
import SagaTester from 'redux-saga-tester';
import fetchMock from 'fetch-mock';
import { fetchDataSaga } from '../../../modules/list';
import * as actions from '../../../modules/list/actions';
import { apiUrl } from '../../../modules/list/constants';

describe('List saga', () => {
    let saga;
    let fetchReply;
    let sagaTester;

    beforeAll(() => {
        fetchReply = {value: 'foo'};
        sagaTester = new SagaTester({});
    });

    afterEach(fetchMock.restore);

    test('should take fetch data success', async () => {
        fetchMock.get(apiUrl, fetchReply);
        sagaTester.run(fetchDataSaga);
        sagaTester.dispatch({type : actions.FETCH_ITEMS_REQUEST});
        await sagaTester.waitFor(actions.FETCH_ITEMS_SUCCESS);

        expect(sagaTester.getLatestCalledAction()).toEqual({
            type: actions.FETCH_ITEMS_SUCCESS,
            data: fetchReply
        });
    });

    test('should put failure action when something went wrong', async () => {
        fetchMock.get(apiUrl, 404);
        sagaTester.run(fetchDataSaga);
        sagaTester.dispatch({type : actions.FETCH_ITEMS_REQUEST});
        await sagaTester.waitFor(actions.FETCH_ITEMS_FAILURE);

        expect(sagaTester.getLatestCalledAction()).toEqual({
            type: actions.FETCH_ITEMS_FAILURE
        });
    });
});
