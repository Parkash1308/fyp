import React from 'react';
import {View, Text, TouchableWithoutFeedback,Image, StyleSheet} from 'react-native';
import Header from './Header';
export default function GeoVerify() {

  let verifyLocation=()=>{
    console.log("press")
  }
  return (
    <>
        <Header/>
        <View style={styles.body}>
          <TouchableWithoutFeedback onPress={verifyLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Varify Location</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </>
  );
}

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
    fontWeight: 'bold',
  },
  left: {
    /* Styles for the left section of the header */
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#333',
  },
  headerText: {
    marginLeft: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
