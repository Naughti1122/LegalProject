import React, { useState } from 'react';
import { View, KeyboardAvoidingView, 
TextInput, StyleSheet, Text, 
Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity  } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import app from '../../Firebase/Config';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

const PenComponent = ({navigation}) => {

  const [issue, setIssue] = useState('');

  const db = getFirestore(app);

    const handlepush = async () => {
      const newIssue = {
        issue: issue,
        id: uuidv4()
      }
      try {
        await setDoc(doc(db, "Cases", newIssue.id), newIssue);
      } catch (error) {
        console.log(error);    
      }
      navigation.navigate('CaseSubmitted');
      setIssue('')
    };


  return (
    <SafeAreaView style={{flex:1}}> 
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
            <View style={{marginHorizontal:20}}>
                <TextInput 
                value={issue}
                onChangeText={(text)=>{setIssue(text)}}
                placeholderTextColor='white' multiline={true} 
                maxLength={500} placeholder="Summarize your case here..." 
                style={styles.textInput} />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:16,fontFamily: 'KohinoorTelugu-Medium', color:'#a56d51'}}>How do you wish to be contacted</Text>
            </View>
          <View style={styles.btnContainer}>
          </View>
          {/* <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Octicons style={{padding:10}} name="dash" size={30} color="#3FA8FE" />
                <Octicons style={{padding:10}} name="dash" size={30} color="#3FA8FE" />
                <Octicons style={{padding:10}} name="dash" size={30} color="black" />
            </View> */}
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
    justifyContent: "space-between",
  },
  textInput: {
    marginTop: 50,
    fontSize: 16,
    color: 'white',
    fontFamily: 'KohinoorTelugu-Medium',
    backgroundColor: '#a56d51',
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
  },
  next: {
    backgroundColor:'#a56d51',
    paddingHorizontal: 30,
    paddingVertical: 15,
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PenComponent;