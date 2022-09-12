import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, ScrollView, Text, TextInput} from 'react-native';
import casesubmitted from '../../assets/casesubmitted.png';
import { Octicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


const CaseSubmitted = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{flex:1, backgroundColor:'#a56d51'}}>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <MaterialCommunityIcons name="email-check-outline" size={80} color="white" />
                    <Text style={styles.submitted}>Your Case Has Been Submitted Successfully!</Text>
                </View>
                {/* <View style={{alignItems:'center', marginTop: 100}}>
                    <Text>Provide your contact below</Text>
                <View style={{flexDirection:'row',marginBottom: 30, alignItems:'center', justifyContent:"center"}}>
                    <MaterialCommunityIcons style={styles.icon} name="whatsapp" size={30} color="white" />
                    <TextInput style={styles.contactinput} placeholder='Whatsapp' />
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:"center"}}>
                    <Feather name="phone-call" size={30} color="white" />
                    <TextInput style={styles.contactinput} placeholder='Whatsapp' />
                </View>
                </View> */}
            </ScrollView>
            <View style={{flex: 0.1,flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Octicons style={{padding:10}} name="dash" size={30} color="#3FA8FE" />
                <Octicons style={{padding:10}} name="dash" size={30} color="#3FA8FE" />
                <Octicons style={{padding:10}} name="dash" size={30} color="#3FA8FE" />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    submitted: {
        fontFamily: 'KohinoorTelugu-Medium',
        color:'#a56d51',
        backgroundColor:'white',
        padding: 10,
    },
    icon: {
        padding:10,
    },
    contactinput: {
        fontSize: 20,
        borderBottomWidth: 1,
        padding: 10,
        width:'50%',
        borderBottomColor:'white',
    },
});

export default CaseSubmitted;
