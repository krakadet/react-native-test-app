import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
function Main(props: Props) {
  return (
    <View style={styles.wrapper}>
      <Text>Some</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
});

export default Main;
