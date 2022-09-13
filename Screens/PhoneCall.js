import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Linking, SafeAreaView } from 'react-native';

const PhoneCall = () => {

  const handlePressCall = () => {
    const url='tel://0541230792'
    Linking.openURL(url);
  };
  
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone!
            Save to get a shareable url.
          </Text>
        </View>
         <TouchableOpacity onPress={handlePressCall}>
            <Text>Press</Text>
         </TouchableOpacity>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});



export default PhoneCall;