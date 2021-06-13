import React, { Component } from 'react';
import {View,Text,Button}from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import Splash from './Screens/splash';
import Login from './Screens/NextLogin';
import Register from './Screens/Login';
import UserGuide from './Screens/userguide';

import Dash from './Screens/dash';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Screen1 extends Component {

    constructor(properties) {
        super(properties);
        //Remove this method to stop OneSignal Debugging 
        OneSignal.setLogLevel(6, 0);
        
        // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
        OneSignal.init("b0c6c566-4d39-4574-a9e7-30cab7e51ac8", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
        OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
        
       
      
         OneSignal.addEventListener('received', this.onReceived);
         OneSignal.addEventListener('opened', this.onOpened);
         OneSignal.addEventListener('ids', this.onIds);
      }

      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        console.log('Device info: ', device);
      }
    
    


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash_Screen" headerMode="none">
                        <Stack.Screen name="Splash_Screen"component={Splash}></Stack.Screen>
                        <Stack.Screen name="Login_Screen"component={Login}></Stack.Screen>
                        <Stack.Screen name="Register_Screen"component={Register}></Stack.Screen>
                        <Stack.Screen name="User_guide"component={UserGuide}></Stack.Screen>
                        <Stack.Screen name="Dash"component={Dash}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
