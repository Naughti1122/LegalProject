import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image} from 'react-native';
import {Card, Title ,Paragraph} from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 

const SingullarCase = (props) => {

    const handleNavigation = () => {
        props.navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <Card style={Styles.container}>
                <Card.Content>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', opacity:0.5}}>
                        <MaterialCommunityIcons name="file-document-edit-outline" size={20} color='#4B4A67' />
                        <Text style={{fontFamily: 'KohinoorTelugu-Medium', color:'#4B4A67'}}>Go LEGAL</Text>
                    </View>
                </Card.Content>
                <Card.Content>
                    <Paragraph style={{fontWeight:'bold', fontFamily: 'KohinoorTelugu-Medium', color:'#4B4A67', paddingVertical:10}}> {props.pass} </Paragraph>
                </Card.Content>
                <Card.Content style={{alignItems:'center'}}>
                    <Paragraph style={Styles.reach}>Click any of this means to help out</Paragraph>
                </Card.Content>
                <Card.Actions style={Styles.actions}>

                    <TouchableOpacity style={{alignItems:'center'}}>
                        <AntDesign name="mail" size={20} color="#4B4A67" />
                        <Text style={Styles.action2}>Email</Text>      
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:'center'}}>
                        <MaterialCommunityIcons name="whatsapp" size={20} color="#4B4A67" />
                        <Text style={Styles.action2}>Whatsapp</Text>   
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:'center'}}>
                        <SimpleLineIcons name="call-out" size={20} color="#4B4A67" />
                        <Text style={Styles.action2}>Call</Text>
                    </TouchableOpacity>

                </Card.Actions>
            </Card>

        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin: 20,
        elevation: 10,
        shadowColor:'#4B4A67', 
        shadowOffset:'1', 
        shadowColor: '#4B4A67',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    contact: {
        backgroundColor:'#4B4A67', 
        padding:8, 
        color:'white', 
        fontFamily: 'KohinoorTelugu-Medium',
    },
    actions: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 20
    },
    reach: {
        backgroundColor:'#4B4A67', 
        padding:10,
        color:'white',
        fontFamily: 'KohinoorTelugu-Medium',
    },
    action2: {
        color:'#4B4A67',
        fontFamily: 'KohinoorTelugu-Medium',
        padding: 5,
    },
})

export default SingullarCase;

