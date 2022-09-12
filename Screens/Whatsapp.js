import React, { useState } from 'react';
import { View, StyleSheet, Text, Linking, TextInput } from 'react-native';

const Whatsapp = () => {

  const [mobileNumber, setMobileNumber] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.mobile_no}
          onChangeText={(mobileNumber) => {setMobileNumber(mobileNumber)}}
          placeholder={'Enter Mobile to Send WhatsApp Message'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <Text
          style={{marginTop:30}}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=233' + mobileNumber
            );
          }}>
          Send WhatsApp Message
        </Text>
      </View>
    );
  };

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:50,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:250,
   height: 44,
   padding: 10,
   margin: 20,
   backgroundColor: '#D3D3D3',
 },
});
