import { connect } from 'react-redux';
import * as actions from '../modules/list/actions';
import * as selectors from '../modules/list/selectors';
import ListComponent from '../components/List';

const mapStateToProps = (state) => ({
    currentPage: selectors.getPage(state) || 1,
    pages: selectors.getPagesLength(state) || 0,
    items: selectors.getItemOnCurrentPage(state) || []
});

const List = connect(mapStateToProps, actions)(ListComponent);

export default List;