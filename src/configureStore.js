import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import reducers from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const middleware = [ReduxThunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    return createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
};

export default configureStore;