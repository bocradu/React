/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/header';
import QuestionsList from './src/components/questionsList';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Test rapid'} />
        <QuestionsList />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
