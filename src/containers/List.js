import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../modules/list/actions';
import * as selectors from '../modules/list/selectors';
import ListComponent from '../components/List';

const mapStateToProps = (state, { match }) => ({
    currentPage: selectors.getPage(state) || 1,
    pages: selectors.getPagesLength(state) || 0,
    items: selectors.getItemOnCurrentPage(state) || [],
    pageFromUrl: parseInt(match.params.page, 10)
});

const List = withRouter(connect(mapStateToProps, actions)(ListComponent));

export default List;