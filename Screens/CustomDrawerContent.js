import React, { Component } from 'react';
import { 
  
  View ,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Button, 
  
  StyleSheet,
  ImageBackground} from 'react-native';

  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {IMAGE} from './image'

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import FastImage from 'react-native-fast-image'
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

export class CustomDrawerContent extends Component {

  constructor(props){
    super(props);
    this.state = { showAlert: false };
    this.state={uid :''};
    this.state={FullName :''};
    this.state={email:''};
    this.state={profile_picture:''};
    
  }

  componentDidMount() {
    this.loadData();
  }




  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };


  loadData =()=>{
     firebase.auth().onAuthStateChanged((user)=>{
       if(user){
        const email =user.email;
        const uid =user.uid;

        firebase.firestore().collection('users').doc(uid).onSnapshot((doc)=>{
         
            const {FullName}=doc.data();
            const {profile_picture}=doc.data();

             //General Info
             this.setState({FullName:FullName});
             this.setState({email:email});
             this.setState({uid:uid});
             this.setState({profile_picture:profile_picture});
            

          
         
        })



       }else{

        

       }
     })

  }

   logout(){
     try{
      firebase.auth().signOut().catch()
      .then(()=>{
        AsyncStorage.clear();
        console.log('User signed out!');
        this.props.navigation.replace('Login_Screen');
      })

     }catch{
      this.props.navigation.replace('Login_Screen');
     }


  
}
  

  
    render() {
      const {showAlert} = this.state;
        return(
            <View style={{flex:1}}>
               <StatusBar
                      //hidden = {true}
                  barStyle="light-content"
                  backgroundColor="#000"
                />
              <ImageBackground source={IMAGE.IMAGE_DRAWER} style={{ height:190,padding:20}}>

                      <FastImage
                    style={styles.userPhoto}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.profile_picture === null) ? IMAGE.ICON_PROFILE : { uri: this.state.profile_picture }}
                  />
            
                 <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',paddingTop:5}}>{this.state.FullName}</Text>
                 <Text style={{color:'#fff',fontSize:10}}>{this.state.email}</Text>
              </ImageBackground>
              
              <ScrollView style={{marginLeft:5,padding:10}}>

             
                
                <Drawer.Section style={styles.drawerSection} title='App'>
                  <DrawerItem icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )} label="Home"
                            onPress={()=> this.props.navigation.navigate('MenuTab')}>
                 </DrawerItem>
                 
                

                 <DrawerItem icon={({color, size}) => (
                                <Icon 
                                name="bell" 
                                color='red'
                                size={size}
                                />
                            )} label="Notification"
                            onPress={()=> this.props.navigation.navigate('Notifications')}>
                 </DrawerItem>

                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection} title='Developer'>

                  <DrawerItem icon={({color, size}) => (
                                <Icon 
                                name="domain" 
                                color={color}
                                size={size}
                                />
                            )} label="About Us"
                            onPress={()=> this.props.navigation.navigate('AboutUs')}>
                  </DrawerItem>
                
                 

                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection} title='Application'>
                      <DrawerItem icon={({color, size}) => (
                                    <Icon 
                                    name="cellphone-arrow-down" 
                                    color={color}
                                    size={size}
                                    />
                                )} label="Updates Anubandh"
                                onPress={()=> this.props.navigation.navigate('UpdateAnubandh')}>
                      </DrawerItem>

                      <DrawerItem icon={({color, size}) => (
                                  <Icon 
                                  name="android-auto" 
                                  color={color}
                                  size={size}
                                  />
                              )} label="About App"
                              onPress={()=> this.props.navigation.navigate('AboutApp')}>
                      </DrawerItem>
                </Drawer.Section>
               
                <Drawer.Section style={styles.drawerSection} title='Account'>

                  <DrawerItem icon={({color, size}) => (
                                <Icon 
                                name="face-agent" 
                                color={color}
                                size={size}
                                />
                            )} label="Help & Support"
                            onPress={()=> this.props.navigation.navigate('HelpSupport')}>
                    </DrawerItem>

                    <DrawerItem icon={({color, size}) => (
                                <Icon 
                                name="shield-lock-outline" 
                                color={color}
                                size={size}
                                />
                            )} label="Share App"
                            
                            onPress={()=> this.props.navigation.navigate('ShareApp')}>
                              
                    </DrawerItem>
                  
                </Drawer.Section>
               
               
             

              </ScrollView>
              <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => {
                      this.showAlert();
                    }}
                />
            </Drawer.Section>

            <AwesomeAlert
                      show={showAlert}
                      showProgress={false}
                      title="Log Out"
                      message="Are you sure want to log out!"
                      closeOnTouchOutside={true}
                      closeOnHardwareBackPress={false}
                      showCancelButton={true}
                      showConfirmButton={true}
                      cancelText="cancel"
                      confirmText="Log Out"
                      confirmButtonColor="#DD6B55"
                      onCancelPressed={() => {
                        this.hideAlert();
                      }}
                      onConfirmPressed={() => {
                        this.logout();
                      }}
                    />




            </View>
          )
    }
}


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 10,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    button: {
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 5,
      backgroundColor: "#AEDEF4",
    },
    text: {
      color: '#fff',
      fontSize: 15
    },
      userPhoto: {
        height:70,
        width:70,
        borderRadius:60,
        marginTop:50
  }
 
});