import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'

import reducers from './modules';
import { fetchDataSaga } from './modules/list'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const middleware = [ReduxThunk, sagaMiddleware];
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    sagaMiddleware.run(fetchDataSaga);

    return store;
};

export default configureStore;