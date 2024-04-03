import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to my first React App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27393F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 30,
    color: '#27393F',
    fontFamily: 'Arial',
    fontSize: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#27393F',
    fontFamily: 'Arial',
    fontSize: 15,
  },
  logo: { width: 200, height: 200 },
});
