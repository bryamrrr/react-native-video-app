import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const PlayPause = ({ onPress, paused }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.container}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
  >
    {paused
      ? (
        <Image
          source={require('../../assets/play.png')}
          style={styles.button}
        />
      ) : (
        <Image
          source={require('../../assets/pause.png')}
          style={styles.button}
        />
      )
    }
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    width: 18,
    height: 18,
  },
});

export default PlayPause;
