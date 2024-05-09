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
      {/* <View style={styles.container}> */}
      <View style={styles.body}>
        <View style={styles.upper}>
          <Text style={styles.heading}>Attendance System</Text>
        </View>
        <View style={styles.container}>
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
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.fbtn}>Forgot Password</Text>
        </View>
      </View>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C7ED',
  },
  upper:{
    width:'100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'cornflowerblue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'200px',
    backgroundColor: '#96C7ED',
    
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:70,
    marginBottom: 70,
    height:"50px",
    color:"white",
    textAlign:'center'
  },
  login: {
    marginBottom: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#616161',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1769CF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fbtn: {
    marginTop: 12,
    color: 'black',
  },
});
