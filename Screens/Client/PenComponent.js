import React, { useState, useRef } from 'react';
import { View, KeyboardAvoidingView, 
TextInput, StyleSheet, Text, 
Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import app from '../../Firebase/Config';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, getFirestore } from "firebase/firestore";


const PenComponent = ({navigation}) => {

  const [issue, setIssue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const db = getFirestore(app);

    const handlepush = async () => {
      const newIssue = {
        issue: issue,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        whatsapp: phoneNumber,
        id: uuidv4()
      };
      try {
        await setDoc(doc(db, "Cases", newIssue.id), newIssue);
      } catch (error) {
        console.log(error);    
      }
      alert('Case Submitted!')
      navigation.navigate('HomeScreen')
      setIssue('');
      setEmail('');
      setPhoneNumber('');
      navigation.navigate('HomeScreen')
    };


  return (
    <SafeAreaView style={{flex:1}}> 
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
            <View style={{marginHorizontal:20}}>
              <TextInput placeholderTextColor='white' style={styles.textInputtwo} placeholder='Type your name here...' />
                <TextInput 
                value={issue}
                onChangeText={(text)=>{setIssue(text)}}
                placeholderTextColor='white' multiline={true} 
                maxLength={400} placeholder="Summarize your case here..." 
                style={styles.textInput} />
            </View>
              <View style={{marginTop:20}}>
                <Text 
                style={{fontSize:18, marginBottom: 10, fontFamily:'KohinoorTelugu-Medium', color:'#4B4A67', textAlign:'center'}}>
                  FILL THE FORMS BELOW</Text>
                <View style={{alignItems:'flex-start', marginHorizontal:50}}>
                <View style={styles.infills}>
                      <Ionicons style={{paddingHorizontal:10}} name="person-add-outline" size={30} color="#4B4A67"  />
                    <TextInput
                      onChangeText={(name)=>{setName(name)}} 
                      value={name}
                      style={styles.infilltext}
                      keyboardType='default' 
                      placeholder='Name' />
                  </View>
                  <View style={styles.infills}>
                    <Ionicons style={{paddingHorizontal:10}} name="ios-mail-unread-outline" size={30} color="#4B4A67" /> 
                    <TextInput
                      onChangeText={(email)=>{setEmail(email)}} 
                      value={email}
                      style={styles.infilltext}
                      keyboardType='email-address' 
                      placeholder='Email' />
                  </View>
                  <View style={styles.infills}>
                    <AntDesign style={{paddingHorizontal:10}} name="mobile1" size={30} color="black" />
                    <TextInput 
                      onChangeText={(phoneNumber)=>{setPhoneNumber(phoneNumber)}}
                      value={phoneNumber}
                      style={styles.infilltext} 
                      keyboardType='numeric'
                      placeholder='Phone Number/Whatsapp Contact' />
                  </View>
                </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={handlepush}>
                  <Text style={styles.next}>POST CASE</Text>
                </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around' ,
  },
  textInput: {
    marginTop: 20,
    fontSize: 15,
    color: 'white',
    fontFamily: 'KohinoorTelugu-Medium',
    backgroundColor: '#4B4A67',
    padding: 10,
    height: 200,
  },
  textInputtwo: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'KohinoorTelugu-Medium',
    backgroundColor: '#4B4A67',
    padding: 10,
  },
  btnContainer: {
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
  },
  next: {
    backgroundColor:'#4B4A67',
    paddingHorizontal: 30,
    paddingVertical: 20,
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  infills: {
    flexDirection:'row',
    marginVertical: 20,
  },
  infilltext: {
    fontSize: 16,
    fontFamily: 'KohinoorTelugu-Medium',
    borderBottomWidth: 1,
    width:250,
  },
});

export default PenComponent;