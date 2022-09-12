import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';

const SingullarCase = (props) => {

    const handleDetail = () => {
       props.navigation.navigate('Details')
       console.log(props);
    }; 

    return (
        <SafeAreaView style={{flex:1}}> 
            <View style={styles.singlecase}>
                <Text numberOfLines={4} style={styles.casetext}> {props.pass} </Text>
                <TouchableOpacity style={styles.details} onPress={handleDetail}>
                    <Text style={styles.casetexttwo}>CLICK TO VIEW FULL DETAILS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    singlecase: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#4B4A67',
        padding: 10,
        borderRadius:10, 
    },
    casetext: {
        color:'#4B4A67',
        fontSize: 15,
        fontFamily: 'KohinoorTelugu-Medium',
    },
    casetexttwo: {
        color:'white',
        fontSize: 16,
        fontFamily: 'KohinoorTelugu-Medium',
    },
    details: {
        marginVertical:10,
        alignSelf:'center',
        padding:10,
        backgroundColor:'#4B4A67',
    },
});

export default SingullarCase;


