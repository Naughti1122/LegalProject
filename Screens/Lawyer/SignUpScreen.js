import React, { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import { View, KeyboardAvoidingView, 
TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback,
Keyboard, TouchableOpacity  } from 'react-native';
import app from '../../Firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);

  // const handleSignUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then(userCredentials => {
  //     const user = userCredentials.user;
  //     console.log('Logged In with:', user.email);
  //     navigation.navigate('DisplayCases')
  // })
  // .catch(error =>alert('Log In First'));
  // };




  return (  
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>WELCOME!</Text>
          <Text style={styles.miniheader}>Create an account here</Text>

          <View 
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:20}}>
            <Ionicons style={{paddingHorizontal:10}} name="person-add-outline" size={30} color="#4B4A67" />
            <TextInput
              value={username} 
              onChangeText={(username)=>{setUserName(username)}}
              keyboardType='default' placeholder="Username" style={styles.textInput} />
          </View>

          <View 
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:20}}>
            <AntDesign style={{paddingHorizontal:10}} name="mail" size={30} color="#4B4A67" />
            <TextInput
              onChangeText={(email)=>{setEmail(email)}}
              value={email}
              keyboardType='email-address' placeholder="Email" style={styles.textInput} />
          </View>

          <View 
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:20}}>
            <FontAwesome5 style={{paddingHorizontal:10}} name="user-lock" size={30} color="#4B4A67" />
            <TextInput
              onChangeText={(password)=>{setPassword(password)}}
              value={password}
              keyboardType='default'
              returnKeyType='done'
              secureTextEntry={true} placeholder="Password" style={styles.textInput} />
          </View>

          <TouchableOpacity style={styles.btnContainer} onPress={()=>navigation.navigate('DisplayCases')}>
                <Text style={{fontFamily: 'KohinoorTelugu-Medium',alignSelf: 'center', color: 'white', padding:10}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 50,
    flex: 1,
    justifyContent: "center"
  },
  header: {
    fontSize: 40,
    color: '#4B4A67',
    alignSelf: 'center',
    fontFamily: 'KohinoorTelugu-Medium',
  },
  miniheader: {
    fontSize: 15,
    marginBottom: 50,
    color: '#4B4A67',
    alignSelf: 'center',
    fontFamily: 'KohinoorTelugu-Medium',
  },
  textInput: {
    borderColor: "#8f8f8f",
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: 'KohinoorTelugu-Medium',
    width:250
  },
  btnContainer: {
    backgroundColor:'#4B4A67',
    borderRadius: 50,
    marginTop: 30
  }
});

export default SignUpScreen;
