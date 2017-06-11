import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const configureStore = () => {
    const middleware = [];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    return createStore(
        state => state,
        applyMiddleware(...middleware)
    );
};

export default configureStore;