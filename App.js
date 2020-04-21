import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import PictureList from './components/picture-list';
import Picture from './components/picture';

const Stack = createStackNavigator();

import store from './rootReduser';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Pictures" component={PictureList} />
            <Stack.Screen name="Picture" component={Picture} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
