import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    BackHandler,
    ImageBackground


} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AnimatedLoader from "react-native-animated-loader";
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
var background = require('../images/Imgback.jpg')
    //var logo =require('../images/AnuLogo.png')
import { IMAGE } from './image';
import DropdownAlert from 'react-native-dropdownalert'
const NetInfo = require('@react-native-community/netinfo');
import AwesomeAlert from 'react-native-awesome-alerts';


export default class splash extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
       

        
    }

    componentWillMount(){
        setTimeout( () => {
            this.props.navigation.replace('Login_Screen');
         },10000);
      
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


    componentDidMount() {
        NetInfo.addEventListener(this.handleConnectivityChange);

    }

    componentWillUnmount() {
        NetInfo.addEventListener(this.handleConnectivityChange);

    }

    handleConnectivityChange = state => {
        if (state.isConnected) {

        } else {
            this.showAlert();
        }
    }








    render() {

        const { visible } = this.state;

        const { showAlert } = this.state;
        return ( 
            <ImageBackground source={require('../images/splash.jpg')}style={{height:"100%",width:"100%"}}>
                 <StatusBar hidden = { true }></StatusBar>

                 <View style={styles.header}>
                 <Animatable.Image animation ="fadeInDown"duraton = "1900"source = { require('../images/AnuLogo.png') }style={styles.logo}></Animatable.Image>
                 </View>
                 
                 
        <AwesomeAlert show = {showAlert}
            showProgress = { false }
            title ="No Internet Connection!"
            message ="Make sure internet connection is on"
            showConfirmButton = { true }
            confirmText ="Okk"
            confirmButtonColor ="#DD6B55"
            onConfirmPressed = {
                () => {
                    BackHandler.exitApp()
                }
 }/>
            

          <DropdownAlert closeInterval = {3000}ref = {ref =>this.dropDownAlertRef=ref}/>

            </ImageBackground>




    

       
           

            
            

       

     
      
        )

    }
    
    async tryToLoginFirst() {
        this.setState({ visible: true });
        const email = await AsyncStorage.getItem("@loggedInUserID:key");
        const password = await AsyncStorage.getItem("@loggedInUserID:password");
        const id = await AsyncStorage.getItem("@loggedInUserID:id");
        if (
            id != null &&
            id.length > 0 &&
            password != null &&
            password.length > 0
        ) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    const { navigation } = this.props;
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(id)
                        .get()
                        .then(function(doc) {
                            var dict = {
                                id: id,
                                email: email,

                                Fullname: doc.displayName
                            };
                            if (doc.exists) {
                                navigation.replace('Dash', { user: dict });
                            }

                        })
                        .catch(function(error) {
                            const { code, message } = error;
                            this.dropDownAlertRef.alert('error', 'Something Goes Wrong', message);

                        });

                })
                .catch(error => {
                    const { code, message } = error;
                    this.dropDownAlertRef.alert('error', 'Something Goes Wrong', message);
                    this.setState({ visible: false });
                    // For details of error codes, see the docs
                    // The message contains the default Firebase string
                    // representation of the error
                });
            return;

        }


    }
}


//const {height} = Dimensions.get("screen");
//const height_logo = height * 0.40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#BB2CD9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    logo: {
        alignItems:'center',
        width: 300,
        height: 250,
        marginTop: 200
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        marginTop: 1
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#FF0000',
        fontWeight: 'bold'
    },

});