import * as selectors from '../../../modules/list/selectors';
import { Map, List } from 'immutable';

let data;

describe('List selectors', () => {
    beforeAll(() => {
        data = {
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
        expect(selectors.getPage(data)).toEqual(1);
        
    });

    test('should return all items on page', () => {
        expect(
            selectors.getItemOnCurrentPage(data)
        ).toEqual(
            List([{id: 1, item: 1},{id: 2, item: 2}])
        );
    });
});
