import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={{
    ...styles.progress,
    width: `${progress}%`,
  }} />
);

const styles = StyleSheet.create({
  progress: {
    backgroundColor: 'rgba(255, 0, 0, .7)',
    height: 35,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default ProgressBar;
