import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';

const SingullarCase = ({pass}) => {
    return (
        <SafeAreaView style={{flex:1}}> 
            <View style={styles.singlecase}>
                <Text style={styles.casetext}> {pass} </Text>
                <TouchableOpacity style={styles.details}>
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
        padding: 10,
        borderRadius:10, 
        backgroundColor:'black',
    },
    casetext: {
        color:'white',
        fontSize: 16,
        fontFamily: 'KohinoorTelugu-Medium',
    },
    casetexttwo: {
        color:'black',
        fontSize: 16,
        fontFamily: 'KohinoorTelugu-Medium',
    },
    details: {
        marginVertical:10,
        alignSelf:'center',
        padding:10,
        backgroundColor:'white',
    },
});

export default SingullarCase;


