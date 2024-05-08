import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';

const Home = () => {
  const navigation = useNavigation();
  const markAttendance = () => {
    console.log('Marking attendance...');
    navigation.navigate('GeoVerify');
  };

  const applyLeave = () => {
    navigation.navigate('ApplyLeave');
  };

  return (
    <View style={styles.homeContainer}>
      <Header/>
      <View style={styles.body}>
        {/* Buttons */}
        <TouchableWithoutFeedback>
          <TouchableOpacity style={styles.button} onPress={markAttendance}>
            <Image
              source={require('../Assests/images/attendance.png')}
              style={{width: 80, height: 80, marginLeft: 10}}
            />
            <Text style={styles.buttonText}>Mark Attendance</Text>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../Assests/images/ViewAttendance.png')}
              style={{width: 80, height: 80, marginLeft: 10}}
            />
            <Text style={styles.buttonText}>View Attendance</Text>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <TouchableOpacity style={styles.button} onPress={applyLeave}>
            <Image
              source={require('../Assests/images/Leave_application.png')}
              style={{width: 80, height: 80, marginLeft: 10}}
            />
            <Text style={styles.buttonText}> Apply Leave</Text>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../Assests/images/ViewProfile.jpg')}
              style={{width: 80, height: 80, marginLeft: 10}}
            />

            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
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
    backgroundColor: '#5FA6C8',
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
    backgroundColor: '#A9CFFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    marginTop: 5,
  },
});

export default Home;
