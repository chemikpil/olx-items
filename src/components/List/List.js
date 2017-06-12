import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Pagination from '../Pagination';
import './List.css';

class List extends Component {
    getItems(items) {
        const list = [];

        items.forEach(item => {
            list.push(
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    data={item.created}
                    location={item.city_label}
                /> 
            )
        });

        return list;
    }

    render() {
        const { items, currentPage, pages, changePage } = this.props;

        return (
            <div className="List">
                <h2 className="List__header">Items list</h2>
                {items.size ? 
                    <div className="List__items">
                        {this.getItems(items)}
                    </div> : <span>No items</span>
                }
                {pages && <Pagination currentPage={currentPage} pages={pages} onClick={changePage}/>}
            </div>
        )
    }
};

List.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    items: PropTypes.object,
    changePage: PropTypes.func
}

export default List;
