import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import React, { useState } from 'react';
import {getGender} from '../gender.js'
import { func } from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
var load;





  
    

export async function getFoods(foodsRetreived,bp) {
    const email = await AsyncStorage.getItem("@loggedInUserID:key");
    const gender = await AsyncStorage.getItem("@loggedInUserID:gender");
    console.log(gender);

   firebase.auth().onAuthStateChanged((user)=>{
       if(user){
        const email =user.email;
        const uid =user.uid;
        firebase.firestore().collection('users').doc(uid).get().then((doc)=>{
            if(doc.exists){
                const {checked}=doc.data();

                gender=checked;
            }
        })

       }else{

       }
   })
   
   

    var foodList = [];
    
   if(gender=="male"){
    var snapshot = await firebase.firestore()
    .collection('users').where('checked','==','female').get()
   }
   else if(gender=="female"){
    var snapshot = await firebase.firestore()
    .collection('users').where('checked','==','male').get()
   }
    



    snapshot.forEach((doc) => {
        
        const foodItem = doc.data();
        foodItem.id = doc.id;
        foodList.push(foodItem);
    });

    foodsRetreived(foodList);
     
    


}