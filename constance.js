import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');
export const widthScreen = screen.width;
export const heightScreen = screen.height;

export const url = 'https://api.unsplash.com/photos/';
export const params = {
  client_id: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
};
