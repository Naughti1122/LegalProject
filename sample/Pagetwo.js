import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity} from 'react-native';

const Pagetwo = ({navigation}) => {

    const [contact, setContact] = useState('')


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{alignItems:'center', justifyContent:'center'}}>

                <TextInput 
                value={contact}
                onChangeText={(contact)=>{setContact(contact)}}
                style={{height:30, width:'80%', alignItems:'center', fontSize:20}} 
                placeholder='Whatsapp Number' />

                <TouchableOpacity onPress={()=>navigation.navigate('Whatsapp', {paramKey:contact})}>
                    <Text style={{fontSize:20, marginTop:10}}>Submit</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Pagetwo;
