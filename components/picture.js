import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {widthScreen, heightScreen} from '../constance';

function Picture(props) {
  console.log('props=>', props);
  const {route} = props;
  console.log('params=>', route.params);

  const {container, sub, cover} = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: route.params.uri}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  cover: {
    borderRadius: 10,
    width: widthScreen,
    height: heightScreen,
  },
});

export default Picture;
