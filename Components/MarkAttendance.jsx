import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from './Header';

export default function MarkAttendance() {
  const route = useRoute();
  const [buttonTextColor, setButtonTextColor] = useState('red');
  const { latitude, longitude } = route.params;

  const inattendance = () => {
    setButtonTextColor('green');
    console.log("In")
  }
  const outattendance = () => {
    setButtonTextColor('green');
    console.log('out')
  }
  return (
    <>
      <Header />
      <View style={styles.body}>
        <Image
          source={require('../Assests/images/user.png')}
          style={{ width: 50, height: 55, marginLeft: 10 }}
        />
        <Text style={styles.name}>User</Text>
        <View style={styles.mark}>
          <TouchableOpacity style={[styles.button, { color: buttonTextColor }]} onPress={inattendance}>
          <Text style={[styles.buttonText]}>IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { color: buttonTextColor }]} onPress={outattendance}>
            <Text style={[styles.buttonText]}>OUT</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Text style={styles.text}>Temporary data </Text>
      <Text style={styles.text}>Mark your attendance</Text>
      <Text style={styles.text}>Latitude: {latitude}</Text>
      <Text style={styles.text}>Longitude: {longitude}</Text>
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
    color: 'black',
  },
  button: {
    marginLeft: 30,
    width: 55,
    height: 55,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2
  },
  buttonText: {
    fontSize: 25,
    color: 'white'
  },
  text: {
    color: 'black'
  },
  mark:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:25,
  }
});
