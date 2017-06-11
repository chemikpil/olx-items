import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './modules';

const configureStore = () => {
    const middleware = [];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    return createStore(
        reducers,
        applyMiddleware(...middleware)
    );
};

export default configureStore;