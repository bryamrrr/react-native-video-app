import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const Header = ({ children }) => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <View style={styles.right}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  right: {
    justifyContent: 'center'
  }
});

export default Header;
