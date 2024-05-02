import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// import {openDatabase} from 'react-native-sqlite-storage';
// let db = openDatabase({name: 'UserDatabase.db',location: "default",});
import {useNavigation} from '@react-navigation/native';

export default function LogIn() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Your login logic here
    console.log('User ID:', userId);
    console.log('Password:', password);
    navigation.navigate('Home');
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Attendance System</Text>
        <Text style={styles.login}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.fbtn}>Forgoted Password</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    login:{
      marginTop: 20,
      marginBottom:15,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'cornflowerblue',
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '80%',
      height: 40,
      backgroundColor: 'cornflowerblue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    fbtn:{
      marginTop: 12,
      color:'skyblue',
    }
  });
  