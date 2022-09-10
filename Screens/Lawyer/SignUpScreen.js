import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView, ImageBackground, TouchableOpacity  } from 'react-native';

const SignUpScreen = () => {
  return (  
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Welcome!</Text>
          <Text style={styles.miniheader}>Create an account here</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput placeholder="Phone Number" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <TouchableOpacity style={styles.btnContainer}>
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
    color: '#3FA8FE',
    alignSelf: 'center',
    fontWeight: '300',
  },
  miniheader: {
    fontSize: 15,
    marginBottom: 50,
    color: '#3FA8FE',
    alignSelf: 'center',
    fontFamily: 'KohinoorTelugu-Medium',
  },
  textInput: {
    height: 50,
    borderColor: "#3FA8FE",
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 15,
    fontFamily: 'KohinoorTelugu-Medium',
  },
  btnContainer: {
    backgroundColor:'#3FA8FE',
    marginTop: 10,
    borderRadius: 50
  }
});

export default SignUpScreen;
