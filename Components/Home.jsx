import React from 'react';
import { View, Text, TouchableWithoutFeedback,Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const markAttendance=()=>{
    navigation.navigate('GeoVerify');
  }

  const applyLeave=()=>{
    navigation.navigate('ApplyLeave');
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
      <Image source={require('../Assests/images/hamburger.png')}
          style={{ width: 30, height: 30, marginLeft: 10 }}
      />
        <View style={styles.center}>
          {/* Header Text */}
          <Text style={styles.headerText}>Attendance System</Text>
        </View>
      </View>
      <View style={styles.body}>
        {/* Buttons */}
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={markAttendance}>Mark Attendance</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View Attendance</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText } onPress={applyLeave}>Apply Leave</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View Profile</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    // padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#5FA6C8',
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  left: {
    /* Styles for the left section of the header */
  },
  hamburgerIcon: {
    /* Styles for the hamburger icon */
    
    width: 30,
    height: 30,
    backgroundColor: '#333',
  },
  center: {
    /* Styles for the center section of the header */
  },
  headerText: {
    marginLeft: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
  button: {
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Home;
