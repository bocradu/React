import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDYvU0A2SzYwgHivVjwu9Y-fr49-xoFpgg',
            authDomain: 'manager-6c438.firebaseapp.com',
            databaseURL: 'https://manager-6c438.firebaseio.com',
            storageBucket: 'manager-6c438.appspot.com',
            messagingSenderId: '428507229333'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
