import React, {useEffect} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {widthScreen} from '../constance';
import {useDispatch, useSelector} from 'react-redux';
import {getPictures} from '../actions';
import {selectPictureData, selectPicturelist} from '../selectors';

function Main(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('effect=>');

    dispatch(getPictures());
  }, []);
  console.log('props=>', props);

  const picturesList = useSelector(selectPicturelist);
  const picturesData = useSelector(selectPictureData);

  console.log('picturesList=>', picturesList);
  console.log('picturesData=>', picturesData);
  const {wrapper, tinyLogo, text, imgWrapper, autor} = styles;
  return (
    <ScrollView style={wrapper}>
      {picturesList.map((pic) => {
        return (
          <TouchableOpacity
            key={pic}
            onPress={() => {
              console.log('onPress=>');

              return navigation.navigate('Picture', {
                uri: picturesData[pic].urls.full,
              });
            }}>
            <Text style={autor}>{picturesData[pic].user.name}</Text>
            <Image
              style={tinyLogo}
              source={{
                uri: picturesData[pic].urls.small,
                alt: picturesData[pic].urls.alt_description,
              }}
            />
            <Text style={text}>{picturesData[pic].description}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    width: widthScreen,
  },
  tinyLogo: {
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
  autor: {
    textTransform: 'capitalize',
    width: widthScreen / 2.4,
    textAlign: 'center',
    alignSelf: 'center',
  },
  imgWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Main;
