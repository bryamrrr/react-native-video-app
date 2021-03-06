import React from 'react';
import { View, StyleSheet } from 'react-native'

const ControlLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ControlLayout;