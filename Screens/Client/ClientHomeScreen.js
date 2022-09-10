import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import mobile from '../../assets/mobile.png';
import { Octicons } from '@expo/vector-icons'; 

const ClientHomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex: 0.9, backgroundColor:'#a56d51'}}>
                <Image source={mobile} resizeMode='cover' style={{width:'100%', height:500, marginBottom: 50}} />
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>CLICK THE BUTTON BELOW TO WRITE YOUR CASE</Text>
                <TouchableOpacity style={{marginVertical:50}} onPress={()=>navigation.navigate('PenComponent')}>
                    <Text style={{backgroundColor:'white', paddingHorizontal:40, paddingVertical:15, color:'#a56d51', fontSize:18}}>NEXT</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 0.1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Octicons style={{padding:10}} name="dash" size={30} color="#a56d51" />
                <Octicons style={{padding:10}} name="dash" size={30} color="black" />
                <Octicons style={{padding:10}} name="dash" size={30} color="black" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ClientHomeScreen;
