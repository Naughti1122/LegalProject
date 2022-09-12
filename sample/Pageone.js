import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Pageone = ({navigation}) => {

    const handleWhatsapp = () => {
        navigation.navigate('Whatsapp');
    };


    return (
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={handleWhatsapp} 
            style={{alignItems:'center', justifyContent:'center'}}>
                <FontAwesome name="whatsapp" size={50} color="black" />
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default Pageone;
