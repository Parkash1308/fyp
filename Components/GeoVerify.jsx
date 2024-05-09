import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
export default function GeoVerify() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // Function to handle location retrieval
  const getCurrentLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to mark attendance.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('geeting location');
        await Geolocation.getCurrentPosition(
          position => {
            const currentLatitude = position.coords.latitude;
            const currentLongitude = position.coords.longitude;
            setLatitude(currentLatitude.toFixed(2).toString());
            setLongitude(currentLongitude.toFixed(2).toString());
            console.log('location extracted:',latitude,longitude)
            
          },
          error => Alert.alert('Error', error.message),
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );

        if (latitude === '27.73' || longitude === '68.82') {
          navigation.navigate('MarkAttendance');
        } else {
          Alert.alert('You are not in your office');
        }

      } else {
        Alert.alert('Location Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }

  
  };

  useEffect(() => {
    // Call getCurrentLocation when component mounts
    getCurrentLocation();
  }, []);

  const verifyLocation = () => {
    console.log('pressed');
  };
  return (
    <>
      <Header />
      <View style={styles.body}>
        <TouchableOpacity onPress={getCurrentLocation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Varify Location</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  button: {
    marginBottom: 10,
    width: 150,
    height: 150,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150 / 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
