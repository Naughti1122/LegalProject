import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import golegal from '../assets/golegal.png'; 
import app from '../Firebase/Config';
import { getAuth } from 'firebase/auth';
import { MaterialIcons, Foundation } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {

  const auth = getAuth(app);

  

  const handleEnter = () => {
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if (user) {
        navigation.navigate('DisplayCases');
      } else {
        navigation.navigate('SignUpScreen');
      }
    });
    return unsubscribe;
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.imageicon}>
          <Image source={golegal} resizeMode='center' style={{width:'100%', height:200}} />
      </View>
      <View style={{alignItems:'center', justifyContent:'center', marginVertical: 30}}>
          <Text style={styles.home}>Go LEGAL</Text>
          <Text style={{color:'#4B4A67',fontSize:12, paddingVertical:5}}>THE HOME OF LEGAL ADVICE</Text>
      </View>
      <View style={styles.bottom}>
            <View style={styles.bottomtext}>
          <TouchableOpacity style={styles.optionbtn} onPress={handleEnter}>
              <Foundation name="page-search" size={50} color="white" />
              <Text style={styles.option}>TAKE A CASE</Text>
          </TouchableOpacity>
              {/* <Text style={{fontWeight: 'bold', fontSize: 15, color:'#4B4A67', paddingHorizontal:20}}> OR </Text> */}
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('PenComponent')}>
              
              <Text style={styles.option}>POST A CASE</Text>   
              <MaterialIcons name="post-add" size={50} color="white" /> 
          </TouchableOpacity>
            </View>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{opacity:0.8 ,color:"#4B4A67", fontWeight: '300', fontSize: 12, paddingVertical: 5}}>By using Go Legal's app you agree to our</Text>
          <Text style={{opacity:0.8 ,color:"#4B4A67", fontWeight: '300', fontSize: 12}}>privacy policy and end user license agreement</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageicon: {
    shadowColor:'#4B4A67', 
    shadowOffset:'1', 
    shadowColor: '#4B4A67',
    shadowOffset: {width: -1, height: 5},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    marginTop: 50,
  },
  home:{
    fontSize: 50,
    color:'#4B4A67',
    fontFamily: 'Palatino-Bold',
  },
  bottom: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4B4A67',
    borderTopRightRadius:'50',
    borderBottomLeftRadius:'50',
    width:'80%',
    marginLeft: 50,
  },
  bottomtext: {
    flexDirection: 'column',
    marginTop:100,
  },
  optionbtn: {
    width:'100%',
    padding: 10,
    marginBottom: 100,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'white'
  },
  option: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    paddingHorizontal:10,
  },
});

export default HomeScreen;
