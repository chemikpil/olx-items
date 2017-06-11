import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(state => state);

render(
    <Root store={store} />, 
    document.getElementById('root')
);
registerServiceWorker();
