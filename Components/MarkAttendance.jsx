import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from './Header';

export default function MarkAttendance() {
  const route = useRoute();
  const {latitude, longitude} = route.params;

  const inattendance = () =>{
    console.log("In")
  }
  const outattendance=()=>{
    console.log('out')
  } 
  return (
    <>
      <Header />
      <View style={styles.body}>
        <Image
          source={require('../Assests/images/user.png')}
          style={{width: 50, height: 55, marginLeft: 10}}
        />
        <Text style={styles.name}>User</Text>
        <TouchableOpacity style={styles.button} onPress={inattendance}>
          <Text style={styles.buttonText}>IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={outattendance}>
          <Text style={styles.buttonText}>OUT</Text>
        </TouchableOpacity>
      </View>
      <Text>Mark your attendance</Text>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row', // Display contents in a row direction
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 5,
  },
  name: {
    fontSize: 30,
    marginLeft: 20,
  },
  button: {
    marginLeft:30,
    width:55,
    height:55,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:55/2
  },
  buttonText: {
    fontSize:25,
    color:'white'
  },
});
