import * as selectors from '../../../modules/list/selectors';
import { Map, List } from 'immutable';

let state;

describe('List selectors', () => {
    beforeAll(() => {
        state = {
            store: {
                list: List([{id: 1, item: 1},{id: 2, item: 2},{id: 3, item: 3},{id: 4, item: 4}]),
                pagination: Map({
                    currentPage: 1,
                    pages: [
                        [1,2],
                        [3,4]
                    ]
                })
            }
        }
    });

    test('should return current page', () => {
        expect(selectors.getPage(state)).toEqual(1);
        
    });

    test('should return all items on page', () => {
        expect(
            selectors.getItemOnCurrentPage(state)
        ).toEqual(
            List([{id: 1, item: 1},{id: 2, item: 2}])
        );
    });

    test('should return lenght of pages', () => {
        expect(selectors.getPagesLength(state)).toEqual(2);
    });
});
