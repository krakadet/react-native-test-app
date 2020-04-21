import React from 'react';
import {Image, View, StyleSheet, ActivityIndicator} from 'react-native';

function Picture(props) {
  const {route} = props;
  const {container, cover} = styles;
  return (
    <View style={container}>
      <Image
        style={cover}
        source={{uri: route.params.uri}}
        resizeMode={'contain'}
      />
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
});

export default Picture;
