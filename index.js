import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Root from './Root';
import configureStore from './store/configureStore'


let store = configureStore() ;
function startRender(){
    render(
        <Provider store={store}>
          <Root/>
        </Provider>
        ,document.getElementById('root')
    )
}
startRender();

