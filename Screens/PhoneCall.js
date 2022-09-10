import React from 'react';
import {View, StyleSheet, SafeAreaView, ImageBackground, Text, TouchableOpacity, Image} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import golegal from '../assets/golegal.png';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.top}>
           <Image source={golegal} />
        </View>
        <View style={styles.middle}>
            <Ionicons name="ios-home-outline" size={30} color='white' />
            <Text  style={styles.home}>Go LEGAL</Text>
            <Ionicons name="ios-home-outline" size={30} color='white' />
        </View>
        <View style={styles.bottom}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color:'#3FA8FE', padding: 50}}>ARE YOU A</Text>
            <View style={styles.bottomtext}>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text style={styles.option}>LAWYER</Text>
          </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 15, color:'#3FA8FE', paddingHorizontal:30}}> OR </Text>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('ClientHomeScreen')}>
              <Text style={styles.option}>NEED HELP!</Text>
          </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>
          <Text style={{color:'#3FA8FE', fontWeight: 'bold', fontSize: 10, paddingVertical: 5}}>By using Go Legal's app you agree to our</Text>
          <Text style={{color:'#3FA8FE', fontWeight: 'bold', fontSize: 10}}>privacy policy and end user license agreement</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 0.3,
  },
  middle: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 5,
    marginHorizontal: 50,
    backgroundColor:'#567470'
  },
  bottom: {
    flex: 0.6,
    alignItems:'center',
    justifyContent: 'center',
  },
  bottomtext: {
    flexDirection: 'row'
  },
  footer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent:'center'
  },
  welcome: {
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 5,
    color:'#567470',
    marginTop: 130,
    fontWeight: '300',
  },
  legal: {
    alignSelf: 'center',
    fontSize: 50,
    color:'white',
    color:'#567470',
    fontFamily: 'Palatino-Bold',
  },
  home:{
    fontSize: 15,
    color:'white',
    fontFamily: 'KohinoorTelugu-Medium',
  },
  optionbtn: {
    padding: 10,
    borderRadius: 10,
    width: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#567470',
    marginBottom: 100
  },
  option: {
    color: '#567470',
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default HomeScreen;
