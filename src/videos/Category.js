import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

const Category = ({ genres, background_image }) => (
  <ImageBackground
    style={styles.wrapper}
    source={{ uri: background_image }}
  >
    <Text style={styles.genre}>{genres[0]}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height:100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});

export default Category;
