import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111827',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons:{
      flex:1,
      justifyContent:'flex-end',
      width:'100%',
      alignItems:'center',
      bottom:'17%',
    },
    button: {
      backgroundColor: '#fff',
      padding: 8,
      margin: 15,
      borderRadius: 50,
      width:'50%',
    },
    buttonText: {
      color: '#111827',
      fontFamily: 'Arial',
      fontSize: 20,
      textAlign:'center',
    },
  });