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
            apiKey: 'AIzaSyBHJNJYDEKZoH0_Xt-RaO17032ogI5aZao',
            authDomain: 'mobile-app-39f46.firebaseapp.com',
            databaseURL: 'https://mobile-app-39f46.firebaseio.com',
            storageBucket: 'mobile-app-39f46.appspot.com',
            messagingSenderId: '543331643091'
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
