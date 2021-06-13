import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'

export function getGender(genderRetrive){

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            const email =user.email;
            const uid =user.uid;
            firebase.firestore().collection('users').doc(uid).get().then(function(snapshot){
                    var {checked}=snapshot.data();
                    
                    
                   genderRetrive(checked);
                    return genderRetrive;
                
                
            })
        }
    })

    
return genderRetrive;
}