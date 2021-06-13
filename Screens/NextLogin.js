import React, { Component } from 'react';
import {View,Text,ImageBackground,StatusBar,StyleSheet,TouchableOpacity,Modal,Image}from 'react-native';
import { Container, Header, Content,Item, Input, Label,Icon, Right, Body, Left, Picker, Form,Textarea } from 'native-base';
import {ActivityIndicator, Colors } from 'react-native-paper';
var bg =require('../images/bg4.jpg');
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import { RadioButton } from 'react-native-paper';
import { Button} from 'react-native-paper';
import CheckBox from 'react-native-check-box';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import 'json-circular-stringify';
import AsyncStorage from '@react-native-community/async-storage';
import AnimatedLoader from "react-native-animated-loader";
import { IMAGE } from './image';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'
var gen;
export default class NextLogin extends Component {

  state = {}

  openDialog = (show) => {
      this.setState({ showDialog: show });
  }

  openConfirm = (show) => {
      this.setState({ showConfirm: show });
  }
 
    constructor(props){

    
    
        super(props);
        this.tryToLoginFirst();
        this.state = { visible: false };
        this.state={
            email:'',
            password:'',
        }
        this.state={
          forgotemail:'',
          
      }
    }




  componentDidMount(){
    this.setState({ visible: true });
    setTimeout( () => {
      this.setState({ visible: false });
   },7000);


      NetInfo.addEventListener(this.handleConnectivityChange);
 
    }
    
    componentWillUnmount(){
     NetInfo.addEventListener(this.handleConnectivityChange);
 
    }
 
    handleConnectivityChange = state => {
        if(state.isConnected){
              
        }else{
          Toast.show('No internet connection');
        }
    }



  async tryToLoginFirst() {
      
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
                          alert(message)
                          this.setState({ visible: false });

                      });

              })
              .catch(error => {
                  const { code, message } = error;
                  alert(message)
                  this.setState({ visible: false });
                  // For details of error codes, see the docs
                  // The message contains the default Firebase string
                  // representation of the error
              });
          return;

      }


  }




    validateEmail=(email)=>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      validateEmail2=(forgotemail)=>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(forgotemail);
      }



      sendEmail=()=>{
        
        if(!this.validateEmail2(this.state.forgotemail)){

          Toast.show('Please enter valid email');

        }else{
          const email=this.state.forgotemail;
          firebase.auth().sendPasswordResetEmail(email).then(function(user){
            Toast.show('Password reset email is sent to your registered email address');
            
          })
          .catch(function (e) {
            console.log(e)
          })
          this.openDialog(false);
        }

      }





    submit(){
       if(!this.validateEmail(this.state.email)){

       
        Toast.show('Please Check out the all fields.');
      
       }else{

        const { email, password } = this.state;
        if (email.length <= 0 || password.length <= 0) {
          Toast.show('Please fill out the required fields.');
         
         
          return;
        }
        this.setState({visible:true});
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(response => {
            const { navigation } = this.props;
            const user_uid = response.user._user.uid;
            firebase
              .firestore()
              .collection("users")
              .doc(user_uid)
              .get()
              .then(function(user) {
                if (user.exists) {
                  const{checked} =user.data();
                  
                  AsyncStorage.setItem("@loggedInUserID:id", user_uid);
                  AsyncStorage.setItem("@loggedInUserID:key", email);
                  AsyncStorage.setItem("@loggedInUserID:password", password);
                  AsyncStorage.setItem("@loggedInUserID:gender", checked);
                  navigation.replace('Dash',{user_uid: user_uid});
                  
                } else {
                  
                  Toast.show('User Does Not Exist')
                  this.setState({visible:false});
                }
              })
              .catch(function(error) {
                const { code, message } = error;
             
                alert(message);
                this.setState({visible:false});
              });
              
          })
          .catch(error => {
            const { code, message } = error;
           alert(message);
            this.setState({visible:false});
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
          });




       }
    }

    render() {
        const { visible } = this.state;
        return (
          <Animatable.View animation="fadeInDown"duraton="1900" style={{ flex: 1,backgroundColor:'#fff'}}>
           <StatusBar hidden={true}  barStyle="light-content" backgroundColor = "#fff" showHideTransition='fade'/>


           <Dialog
                    animationType="fade"
                    contentStyle={{
                        alignItems: "center",
                        justifyContent: "center",}}
                    
                    visible={this.state.showDialog}>
                   
                   <Text style={{marginTop:5,
                    color:'#4C4B4B',
                    fontSize:20,
                    fontFamily:'Noto Sans Bold',
                    textAlign:'center',
                    fontWeight:'bold'}}>Forgot Password</Text>


                      <Item>
                        <Input
                        style={{marginTop:10,margin:0}}
                        placeholder="Enter your email"
                        keyboardType='email-address'
                        onChangeText={(text) =>{this.setState({forgotemail:text})}} />
                      </Item>

                      <TouchableOpacity disabled={!this.state.forgotemail} onPress={() => {this.sendEmail()}}>
                        <Button disabled={!this.state.forgotemail} style={{backgroundColor:'#F3B431',fontWeight:'bold',marginTop:10,borderRadius:20}} mode="contained">Send Email</Button>
                          </TouchableOpacity>

                          <TouchableOpacity  onPress={() => {this.openDialog(false)}}>
                              <Button labelStyle={{color:'#4C4B4B'}}>Cancel</Button>
                          </TouchableOpacity>

                          <Text style={{textAlign:'center',color:'red',padding:5,fontFamily:'Noto Sans Bold',fontSize:10}}>*Enter valid register email.</Text>

                </Dialog>

               
           < AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={IMAGE.LOADING_5}
                            animationStyle={styles.lottie}
                            speed={1}
             /> 

           <Image source={require('../images/log.png')} style={{width:'100%',height:200}}></Image>

           <Animatable.Text animation="fadeInDown"duraton="1900" style={styles.title}>Log In</Animatable.Text>

           <Content>

          

           <Form style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            

           <Item rounded style={{marginVertical:5,marginTop:30,width:'85%'}}>
          <Input 
          style={{color:'#616c6f',marginLeft:15}} 
          placeholder="E-mail"
        
          keyboardType='email-address'
          onChangeText={(text) =>{this.setState({email:text})}}
          placeholderTextColor="#000"/>
       </Item>

       <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
          <Input 
          style={{color:'#616c6f',marginLeft:15}} 
          placeholder='Password'
          secureTextEntry={true}
          maxLength={8}
          onChangeText={(text) =>{this.setState({password:text})}}
          placeholderTextColor="#000"/>
       </Item>
     
      <Text  onPress={() => this.openDialog(true)} style={{color:'#616c6f',textAlign:'right',fontSize:15,padding:10}}>Forgot Password? </Text>
     
       

       <Animatable.View animation="fadeInDown" duraton="1900" >
                  <TouchableOpacity  disabled={!this.state.email||!this.state.password}  onPress={() => {this.submit()}}>
                    <LinearGradient
                            colors={['#E5B143', '#E5B143']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            
            </Animatable.View>

            <Text 
            style={{
            color:'#616c6f',
            textAlign:'center',
            fontSize:15,
            marginTop:10}}>Not Register?  
            <Text style={{
              color:'#4BCFFA',
              textAlign:'center',
              fontWeight:'bold',
              fontSize:18}}onPress={()=>this.props.navigation.replace('Register_Screen')}>Register</Text></Text>

              

           </Form>

           </Content>

          </Animatable.View>
           )
    }
}
const styles = StyleSheet.create({
    
    title:{
        color:'#E5B143',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    signIn: {
        width: 300,
        height: 50,
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    },
    lottie: {
        width: 100,
        height: 100
      },
      container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    welcomeText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
    exampleText: {
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center",
    },
    instructionsText: {
        color: "#333333",
        fontSize: 16,
        marginBottom: 40,
        textAlign: "center",
    },
})



  