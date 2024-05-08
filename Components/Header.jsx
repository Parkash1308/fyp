import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
  } from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <>
        <View style={styles.header}>
        <Image
          source={require('../Assests/images/hamburger.png')}
          style={{width: 30, height: 30, marginLeft: 10}}
        />
        <View style={styles.center}>
          {/* Header Text */}
          <Text style={styles.headerText}>Attendance System</Text>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
    }
  });