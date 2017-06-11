import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../containers/App';
import List from '../../containers/List';
import Item from '../../containers/Item';
import NotFound from '../NotFound';

const Root = ({ store }) => (
    <Provider store={store}>
        <App>
            <Router>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/list" component={List} />
                    <Route path="/list/:page" component={List} />
                    <Route path="/item/:id" component={Item} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </App>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
