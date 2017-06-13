import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.css';

class Pagination extends Component{
    getLinks() {
        const links = [];
        const { pages, currentPage, onClick } = this.props;

        for (let page = 1; page <= pages; page ++) {
            if (page === currentPage) {
                links.push(
                    <span 
                        key={page}
                        className="Pagination__item Pagination__item--active"
                    >{page}</span>
                    )
            } else {
                links.push(
                    <Link 
                        key={page} 
                        to={`/list/page/${page}`}
                        onClick={() => onClick(page)}
                        className="Pagination__item"
                    >{page}</Link>
                );
            }
        }

        return links;
    }

    render() {
        return(
            <div className="Pagination">
                {this.getLinks()}
            </div>
        )
    }
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Pagination;
