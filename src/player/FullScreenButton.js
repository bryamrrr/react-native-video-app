import React from 'react';
import {
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const FullScreen = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
  >
    <Image
      source={require('../../assets/fullscreen.png')}
      style={styles.button}
    />
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    width: 18,
    height: 18,
  },
});

export default FullScreen;
