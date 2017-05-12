import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDtTzZKZ-UatfmzGaq84YqkLl57Axw1WQA',
      authDomain: 'secret-spark-124823.firebaseapp.com',
      databaseURL: 'https://secret-spark-124823.firebaseio.com',
      projectId: 'secret-spark-124823',
      storageBucket: 'secret-spark-124823.appspot.com',
      messagingSenderId: '56443167462'
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
