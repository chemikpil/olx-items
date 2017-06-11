import { reducers } from '../../../modules/list/reducer';
import * as actions from '../../../modules/list/actions';
import { Map, List } from 'immutable';

describe('List reducer', () => {
    test('should return the initial state', () => {
        expect(
            reducers(undefined, {})
        ).toEqual({
            list: List(),
            isFetching: false,
            pagination: Map()
        });
    });

    test('should set isFetching on true after FETCH_ITEMS_REQUESTED', () => {
        expect(
            reducers({list: [], isFetching: true, pagination: {}}, {
                type: actions.FETCH_ITEMS_REQUEST
            }).isFetching
        ).toEqual(true)
    });

    test('should set isFetching on true after FETCH_ITEMS_SUCCESS', () => {
        expect(
            reducers({list: [], isFetching: true, pagination: {}}, {
                type: actions.FETCH_ITEMS_SUCCESS,
                data: []
            }).isFetching
        ).toEqual(false)
    });

    test('should set isFetching on true after FETCH_ITEMS_FAILURE', () => {
        expect(
            reducers({list: [], isFetching: true, pagination: {}}, {
                type: actions.FETCH_ITEMS_FAILURE
            })
        ).toEqual({
            list: [],
            isFetching: false,
            pagination: {}
        })
    });

    test('should add items to list store', () => {
        expect(
            reducers({}, {
                type: actions.FETCH_ITEMS_SUCCESS,
                data: [{
                    ads: [{item: 1}]
                },{
                    ads: [{item: 2}]
                }]
            }).list.toJS()
        ).toEqual([
            {item: 1},
            {item: 2}
        ]);
    });

    test('should add next items to existing list of items', () => {
        expect(
            reducers({list: List([{item: 1},{item: 2}])}, {
                type: actions.FETCH_ITEMS_SUCCESS,
                data: [{
                    ads: [{item: 3}]
                },{
                    ads: [{item: 4}]
                }]
            }).list.toJS()
        ).toEqual([
            {item: 1},
            {item: 2},
            {item: 3},
            {item: 4}
        ]);
    });

    test('should add pages with item ids to pagination store', () => {
        expect(
            reducers({}, {
                type: actions.FETCH_ITEMS_SUCCESS,
                data: [{
                    page: 1,
                    total_pages: 2,
                    ads: [{id: 1, item: 1}]
                },{
                    page: 2,
                    total_pages: 2,
                    ads: [{id: 2, item: 2}]
                }]
            }).pagination.toJS()
        ).toEqual({
            currentPage: 1,
            pages: [
                [1],
                [2]
            ]
        });
    });

    test('should change page properly', () => {
        expect(
            reducers({}, {
                type: actions.CHANGE_PAGE,
                page: 2
            }).pagination.getIn('currentPage')
        ).toEqual(2);
    })
});