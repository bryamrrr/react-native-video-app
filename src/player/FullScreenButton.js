import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

const PlayPause = ({ onPress, fullScreenOn }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor='red'
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
  >
    {fullScreenOn
      ? <Text>FullScreen Off</Text>
      : <Text>FullScreen On</Text>
    }
  </TouchableHighlight>
);

export default PlayPause;
