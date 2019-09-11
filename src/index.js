import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setLocalTasks } from './store/localTasks/localTasks';
import AppRouter from './routers/AppRouter';
import "./styles/styles.scss"

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

store.subscribe( () => {
  setLocalTasks( store.getState().tasks );
});

ReactDOM.render(jsx , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
