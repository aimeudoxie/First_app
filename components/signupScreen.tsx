import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';


export default function Signup() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  return (
    <View style={styles.container}>
            <View style={styles.headers}>
                <View style={styles.left}> 
                <Image
        source={require('../assets/left.png')}/> 
      </View>
                <Text style={styles.title}>
                Sign Up
            </Text>
                <View style={styles.right}> 
                <Image
        source={require('../assets/menu.png')}/>  
        </View>
                
            </View>
            <View style={styles.form}>
            <Text style={styles.label}>Full Names  </Text>
             <TextInput
        style={styles.input}
        placeholder="Enter full names"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.label}>Email  </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
       <Text style={styles.label}>Password  </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.label}>Confirm password  </Text>
      <TextInput
        style={styles.input}
        placeholder="Re-enter password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setconfirmPassword(text)}
      />
       
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Already have account sign In  </Text>
            <Text style={styles.text}>or sign In with </Text>
            <TouchableOpacity style={styles.socials}>
            <Image
        source={require('../assets/google.png')} style={styles.google}/> 
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socials}>
      <Image
        source={require('../assets/github.png')} style={styles.google}/> 
        <Text style={styles.socialText}>Continue with Github</Text>
      </TouchableOpacity>
            </View>
            
     
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:30,
    },
    button: {
      backgroundColor: '#111827',
      alignItems:'center',
      marginLeft:75,
      marginTop:30,
      marginBottom:10,
      padding: 8,
      borderRadius: 50,
      width:'60%',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      textAlign:'center',
    },
    headers:{
        alignItems:'center',
        top:60,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    left:{
        width:50,
        height:50,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#111827',

    },
    right:{
        width:50,
        height:50,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#111827',

    },
    title:{
        fontSize:32,
        color:'#111827',
        fontWeight:'500',
    },
    form:{
        justifyContent:'center',
        top:130,
        padding:5,
    },
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#111827',
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor:'#E8E8E8',
        marginTop:5,
      },
      label:{
        fontSize:19.8,
        color:'#111827',
        fontWeight:'400',
        
      },
      text:{
        fontSize:12.3,
        color:'#111827',
        textAlign:'center',
        margin:5,
      },
      socials:{
        backgroundColor: '#D9D9D9',
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginLeft:75,
        marginTop:20,
        padding: 10,
        width:'60%',
      },
      socialText:{
        color: '#111827',
      fontSize: 13,
      textAlign:'center',
      },
      google:{
        width:20,
        height:20,
      }
  });