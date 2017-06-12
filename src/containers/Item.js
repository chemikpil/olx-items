import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../modules/list/actions';
import * as selectors from '../modules/list/selectors';
import ItemComponent from '../components/Item';

const mapStateToProps = (state, { match }) => {
    return {
        item: selectors.getItemDetails(state, match.params.id) || {}
    }
}

const Item = withRouter(connect(mapStateToProps, actions)(ItemComponent));

export default Item;