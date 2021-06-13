import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'

export async function getNotification(foodsRetreived) {




    
    var foodList = [];
   
    var snapshot = await firebase.firestore()
        .collection('Notification').get()

    snapshot.forEach((doc) => {
        const foodItem = doc.data();
        foodItem.id = doc.id;
        foodList.push(foodItem);
    });

    foodsRetreived(foodList);

}