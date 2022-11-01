import React, { useState } from 'react';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import { View, KeyboardAvoidingView, 
TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback,
Keyboard, TouchableOpacity, SafeAreaView  } from 'react-native';
import app from '../../Firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import InputScrollView from 'react-native-input-scroll-view';

const SignUpScreen = ({navigation}) => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const auth = getAuth(app);

  const handleSignUp = () => {
    if (username.length==0||email.length==0||password==0) {
      setError(true);
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged In with:', user.email);
      navigation.navigate('DisplayCases')
  })
  .catch(error =>alert('Log In First'));
  };




  return (
    <SafeAreaView style={styles.container}>
        <InputScrollView>
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
          {error&&username.length<=0  ? 
          <Text style={{padding:5, fontWeight:'200', color:'red', alignSelf:'center'}}>Username can't be empty</Text>
          : null } 

          <View 
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:20}}>
            <AntDesign style={{paddingHorizontal:10}} name="mail" size={30} color="#4B4A67" />
            <TextInput
              onChangeText={(email)=>{setEmail(email)}}
              value={email}
              keyboardType='email-address' placeholder="Email" style={styles.textInput} />
          </View>
          {error&&email<=0 ? 
          <Text style={{padding:5, fontWeight:'200', color:'red', alignSelf:'center'}}>Email can't be empty</Text> 
          : null}
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
          {error && password <= 0 ? 
          <Text style={{padding:5, fontWeight:'200', color:'red', alignSelf:'center'}}>Password can't be empty</Text> 
          : null}
          <TouchableOpacity style={styles.btnContainer} onPress={handleSignUp}>
                <Text style={{fontWeight:'bold',alignSelf: 'center', color: 'white', padding:10}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        </InputScrollView>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 50,
  },
  header: {
    fontSize: 40,
    color: '#4B4A67',
    alignSelf: 'center',
    fontFamily: 'Palatino-Bold',
  },
  miniheader: {
    fontSize: 15,
    marginBottom: 50,
    color: '#4B4A67',
    alignSelf: 'center',
    fontFamily: 'Palatino-Bold',
  },
  textInput: {
    borderColor: "#8f8f8f",
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: 'Kohinoor Bangla',
    width:250
  },
  btnContainer: {
    backgroundColor:'#4B4A67',
    borderRadius: 50,
    marginTop: 30
  }
});

export default SignUpScreen;
