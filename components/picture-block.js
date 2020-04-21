import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {widthScreen} from '../constance';
import {useSelector} from 'react-redux';
import {selectPictureData} from '../selectors';

function PictureBlock(props) {
  const {pic} = props;
  const {author, picture, text} = styles;
  const picturesData = useSelector(selectPictureData);
  return (
    <>
      <Text style={author}>{picturesData[pic].user.name}</Text>
      <Image
        style={picture}
        source={{
          uri: picturesData[pic].urls.small,
          alt: picturesData[pic].urls.alt_description,
        }}
      />
      <Text style={text}>{picturesData[pic].description}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: widthScreen,
    height: 110,
    marginBottom: 10,
    marginRight: 5,
  },
  text: {
    padding: 5,
    textAlign: 'center',
    width: widthScreen,
  },
  author: {
    textTransform: 'capitalize',
    width: widthScreen / 2.4,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default PictureBlock;
