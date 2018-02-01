/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import LoginView from './src/components/loginView';


export default class App extends Component<{}> {
  render() {
    return (
        <LoginView/>
    );
  }
}

const styles = StyleSheet.create({
});
