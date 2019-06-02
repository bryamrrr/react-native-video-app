import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Back = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
  >
    <Text style={styles.button}>Atrás</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {

  },
});

export default Back;
