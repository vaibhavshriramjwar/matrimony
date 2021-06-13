import * as React from 'react';
import { Text, View ,Image,TouchableOpacity,StatusBar,ScrollView,Button} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'

import {CustomDrawerContent} from './CustomDrawerContent';
import {CustomHeader} from './CustomHeader';


import{IMAGE} from './image';

//Tab Screens
import {HomeScreen} from './TabScreen/HomeScreen';
import {HomeScreenDetail} from './TabScreen/HomeScreenDetail';
import {SettingsScreen}from './TabScreen/SettingsScreen';


import {ProfileScreen} from './TabScreen/ProfileScreen'
import {ImageUpload} from './TabScreen/ImageUpload'

//Drawer Screen
import {NotificationsScreen} from './DrawerScreen/NotificationsScreen';
import {AboutUs}from './DrawerScreen/AboutUs'
import {UpdatesAnubandh} from './DrawerScreen/UpdatesAnubandh'
import {AboutApp} from './DrawerScreen/AboutApp'
import {HelpSupport} from './DrawerScreen/HelpSupport'
import {ShareApp} from './DrawerScreen/ShareApp'
import {Feeds} from './DrawerScreen/Feeds'


function TabNavigator(){
  return(
<Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME_BLACK
              : IMAGE.ICON_HOME ;

          } else if (route.name === 'Search') {
            iconName = focused 
            ? IMAGE.ICON_SEARCH_BLACK
            : IMAGE.ICON_SEARCH;

          }  else if (route.name === 'Profile'){
            iconName = focused 
            ? IMAGE.ICON_PRO_BLACK 
            : IMAGE.ICON_PRO;

          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{width:20,height:20}} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SettingStack} />
        
        <Tab.Screen name="Profile"component={ProfileStack}/>
         
      </Tab.Navigator>
  )
}




const Drawer = createDrawerNavigator();


const Tab = createBottomTabNavigator();


const navOptionHandler = ()=>({
  headerShown:false
})

const StackHome = createStackNavigator();


function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home"component={HomeScreen} options={navOptionHandler}></StackHome.Screen>
      <StackHome.Screen name="HomeDetail"component={HomeScreenDetail}options={navOptionHandler}></StackHome.Screen>
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();

function SettingStack(){
  return(
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting"component={SettingsScreen}options={navOptionHandler}></StackSetting.Screen>
      
    </StackSetting.Navigator>
  )
}


const StackProfile = createStackNavigator();
function ProfileStack(){
  return(
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}></StackProfile.Screen>
      <StackProfile.Screen name="ImageUpload" component={ImageUpload} options={navOptionHandler}></StackProfile.Screen>
    </StackProfile.Navigator>
  )
}

export default function App({navigation}) {




  
  return (
    
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={()=><CustomDrawerContent navigation={navigation} />} >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="UpdateAnubandh" component={UpdatesAnubandh} ></Drawer.Screen>
        <Drawer.Screen name="AboutApp" component={AboutApp}></Drawer.Screen>
        <Drawer.Screen name="HelpSupport" component={HelpSupport}></Drawer.Screen>
        <Drawer.Screen name="ShareApp" component={ShareApp}></Drawer.Screen>
        <Drawer.Screen name="Feeds" component={Feeds}></Drawer.Screen>
      </Drawer.Navigator>
    
  );
}