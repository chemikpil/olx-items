import * as actions from '../../../modules/list/actions';

describe('List actions', () => {
    test('should create an action to change page', () => {
        const page = 2;
        const expectedAction = {
            type: actions.CHANGE_PAGE,
            page
        }
        expect(actions.changePage(page)).toEqual(expectedAction);
    });
});
