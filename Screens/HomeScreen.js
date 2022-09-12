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
      </View>
      <View style={styles.bottom}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color:'#4B4A67', padding: 50}}>ARE YOU A</Text>
            <View style={styles.bottomtext}>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text style={styles.option}>LAWYER</Text>
          </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 15, color:'#4B4A67', paddingHorizontal:30}}> OR </Text>
          <TouchableOpacity style={styles.optionbtn} onPress={()=>navigation.navigate('PenComponent')}>
              <Text style={styles.option}>I NEED HELP!</Text>
          </TouchableOpacity>
            </View>
        </View>
        <View style={{flex: 0.1, alignItems:'center'}}>
          <Text style={{color:'#4B4A67', fontWeight: 'bold', fontSize: 12, paddingVertical: 5}}>By using Go Legal's app you agree to our</Text>
          <Text style={{color:'#4B4A67', fontWeight: 'bold', fontSize: 12}}>privacy policy and end user license agreement</Text>
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
    borderBottomColor: '#4B4A67',
    marginBottom: 100,
  },
  option: {
    color: '#4B4A67',
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default HomeScreen;
