import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pagination extends Component{
    getLinks() {
        const links = [];
        const { pages, currentPage, onClick } = this.props;

        for (let page = 1; page <= pages; page ++) {
            if (page === currentPage) {
                links.push(<span key={page}>{page}</span>)
            } else {
                links.push(
                    <Link 
                        key={page} 
                        to={`/list/${page}`}
                        onClick={() => onClick(page)}
                    >{page}</Link>
                );
            }
        }

        return links;
    }

    render() {
        return(
            <div>
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
