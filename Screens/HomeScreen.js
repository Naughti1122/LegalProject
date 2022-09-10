import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import golegal from '../assets/golegal.png'; 

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
      <View style={styles.imageicon}>
          <Image source={golegal} resizeMode='center' style={{width:'100%', height:200}} />
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop: 30,}}>
          <Text style={styles.home}>Go LEGAL</Text>
          <Text style={{backgroundColor:'#a56d51', padding:10, fontFamily: 'KohinoorTelugu-Medium', color:'white'}}>The home of legal help</Text>
      </View>
      <View style={styles.bottom}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color:'#a56d51', padding: 50}}>ARE YOU A</Text>
            <View style={styles.bottomtext}>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text style={styles.option}>LAWYER</Text>
          </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 15, color:'#a56d51', paddingHorizontal:30}}> OR </Text>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('ClientHomeScreen')}>
              <Text style={styles.option}>NEED HELP!</Text>
          </TouchableOpacity>
            </View>
        </View>
        <View style={{flex: 0.1, alignItems:'center'}}>
          <Text style={{color:'#a56d51', fontWeight: 'bold', fontSize: 10, paddingVertical: 5}}>By using Go Legal's app you agree to our</Text>
          <Text style={{color:'#a56d51', fontWeight: 'bold', fontSize: 10}}>privacy policy and end user license agreement</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageicon: {
    shadowColor:'black', 
    shadowOffset:'1', 
    shadowColor: 'black',
    shadowOffset: {width: -1, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: 50,
  },
  home:{
    fontSize: 50,
    color:'#a56d51',
    fontFamily: 'Palatino-Bold',
  },
  bottom: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-evenly' ,
  },
  bottomtext: {
    flexDirection: 'row'
  },
  optionbtn: {
    padding: 10,
    borderRadius: 10,
    width: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#a56d51',
    marginBottom: 100
  },
  option: {
    color: '#a56d51',
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default HomeScreen;
