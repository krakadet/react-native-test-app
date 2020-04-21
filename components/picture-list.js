import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {widthScreen} from '../constance';
import {getPictures} from '../actions';
import {selectPictureData, selectPictureList} from '../selectors';
import PictureBlock from './picture-block';

function PictureList(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  const picturesList = useSelector(selectPictureList);
  const picturesData = useSelector(selectPictureData);

  useEffect(() => {
    dispatch(getPictures());
  }, [picturesList, picturesData]);

  const {wrapper} = styles;

  return (
    <ScrollView style={wrapper}>
      {picturesList.map((pic) => {
        return (
          <TouchableOpacity
            key={pic}
            onPress={() =>
              navigation.navigate('Picture', {
                uri: picturesData[pic].urls.full,
              })
            }>
            <PictureBlock pic={pic} />
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
  author: {
    textTransform: 'capitalize',
    width: widthScreen / 2.4,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default PictureList;
