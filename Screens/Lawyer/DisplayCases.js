import React, { useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import app from '../../Firebase/Config';
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import {addIssues} from '../../Redux/Action1';
import SingullarCase from './SingullarCase';
import { Entypo, Ionicons } from '@expo/vector-icons'; 
import { getAuth, signOut } from 'firebase/auth';

const DisplayCases = (props) => {

    const db = getFirestore(app);

    const auth = getAuth(app);

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
  console.log(cases);

 const handleHomeNav = () => {
    props.navigation.navigate('HomeScreen')
 };

 const handleSignout = () => {
    signOut(auth).then(() => {
        console.log('Sign-out successful');
      }).catch((error) => {
        console.log('An error happened');
      });
      props.navigation.navigate('HomeScreen');
 };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
            <View 
            style={{flex: 0.1,flexDirection:'row', 
            alignItems:'center',justifyContent:'space-between',
            paddingHorizontal: 20, 
            backgroundColor:'white'}}>
                <Ionicons onPress={handleHomeNav} name="md-home-outline" size={20} color="#4B4A67" />
                <View style={styles.main}>
                    <Text style={styles.cases}>CASES</Text>
                </View>
                <TouchableOpacity onPress={handleSignout}>
                    <Text style={{color:'#4B4A67'}}>SignOut</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList
                data = {cases}
                renderItem = {(item) => 
                <SingullarCase pass={item.item.issue} 
                phoneNumber={item.item.phoneNumber} 
                whatsapp={item.item.whatsapp}
                email = {item.item.email}
                name = {item.item.name}
                navigation={props.navigation} /> } 
                keyExtractor = {(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    },
    cases: {
        color:'#4B4A67',
        fontWeight:'bold',
        fontSize: 30,
        fontFamily: 'Baskerville-SemiBold',
    },
    list: {
        flex: 1,
    },
});

export default DisplayCases;
