/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './components/main';
import Picture from './components/picture';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import store from './rootReduser';

export default class App extends Component {
  render() {
    console.log('store=>', store.getState());
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main}  />
            <Stack.Screen name="Picture" component={Picture} />
          </Stack.Navigator>
        </NavigationContainer>
        {/*<Main />*/}
      </Provider>
    );
  }
}
