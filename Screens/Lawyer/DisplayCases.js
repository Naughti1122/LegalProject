import React, { useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import app from '../../Firebase/Config';
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import {addIssues} from '../../Redux/Action1';
import SingullarCase from './SingullarCase';
import { Entypo } from '@expo/vector-icons'; 

const DisplayCases = (props) => {

    const db = getFirestore(app);

    const dispatch = useDispatch();

    useEffect(()=>{
        const getData = async () => {
            const q = query(collection(db, 'Cases'));
            onSnapshot(q, (querySnapshot) => {
                const issues = [];
                querySnapshot.forEach((doc) => {
                    issues.push(doc.data());
                });
                dispatch(addIssues(issues))
              });
        };
        getData();
    },[]);

    const show = useSelector((state)=>state.Reducer1);

  const cases=show.issues
 // console.log(cases);
//#8DB580
//#4B4A67
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.main}>
                <Entypo name="text-document" size={50} color="#4B4A67" />
                <Text style={styles.cases}>CASES</Text>
            </View>
            <View style={styles.list}>
                <FlatList
                data = {cases}
                renderItem = {(item) => <SingullarCase pass={item.item.issue} navigation={props.navigation} /> } 
                keyExtractor = {(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 0.1, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    },
    cases: {
        fontSize: 25,
        fontFamily: 'KohinoorTelugu-Medium',
        color:'#4B4A67',
    },
    list: {
        flex: 1,
    },
});

export default DisplayCases;
