import React, { Component,useState } from 'react';
import {
  
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  container,
  Text,
  BackHandler,
  ScrollView,
  Dimensions,
  Image,
  Linking, 
  
  Alert} from 'react-native';

import {
   Container, 
   Header, 
   Content,
   Item, 
   Input, 
   Label,
   Icon, 
   Right, 
   Body, 
   Left, 
   Picker, 
   Form,
   Textarea } from 'native-base';
   import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker'
import { RadioButton } from 'react-native-paper';
import { Button} from 'react-native-paper';
import AnimatedLoader from "react-native-animated-loader";
//import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'

import Modal from "react-native-modal";
//import AutoHeightImage from 'react-native-auto-height-image';
//import Image from 'react-native-scalable-image';
//import ImagePicker from '../ui/ImagePicker';
//import { withFormik } from 'formik';
//import FitImage from 'react-native-fit-image';
//import CheckBox from 'react-native-icon-checkbox';
import Toast from 'react-native-simple-toast';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from "react-native-image-picker";
//import Menu from './menu';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
var bg =require('../images/bg3.jpg');
//const Stack =createStackNavigator();
import { IMAGE } from './image';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

//import NstLogin from './NextLogin.js';
class Login extends Component {


  


  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });



  //Profile Picture------------------------------------------------
  
//End of Profile Pic---------------------------------------------------------


//-----------------------------Second Image------------------------------------------------

//------------------------End of Profile Pic---------------------------------------------------------


//-----------------------------Second Image------------------------------------------------

//------------------------End of Profile Pic---------------------------------------------------------









  state = {
    checked: 'first',
  };

  state = {
    checkede: 'agree',
  };

   state={credit_for:''}
   updateUser =(credit_for)=>{
      this.setState({credit_for : credit_for})
   }

   state ={country:''}
   updatecountry =(country)=>{
     this.setState({country:country})
   }
   state ={states:''}
   updateStates =(states)=>{
     this.setState({states:states})
   }

   state={marital_status:''}
   updatemarry =(marital_status)=>{
     this.setState({marital_status : marital_status})
   }
   state={mother_tongue:''}
   updatemt =(mother_tongue)=>{
     this.setState({mother_tongue : mother_tongue})
   }
   state={zodiac_sign:''}
   updatezs =(zodiac_sign)=>{
     this.setState({zodiac_sign : zodiac_sign})
   }
   state={religion_caste:''}
   updaterc =(religion_caste)=>{
     this.setState({religion_caste : religion_caste})
   }
   state={blood_group :''}
   updatebg =(blood_group )=>{
      this.setState({blood_group  : blood_group })

   }
   state={employee_in :''}
   updateei =(employee_in )=>{
     this.setState({employee_in : employee_in })
   }
   state={anual_income  :''}
   updateai =(anual_income  )=>{
     this.setState({anual_income   : anual_income  })
   }

   state={Height:''}
   Height =(Height)=>{
     this.setState({Height:Height})
   }
  // FoodForm = (props) => {
    //setFoodImage = (image) => {
     // this.props.setFieldValue('imageUri', image.uri);
   // }
 // }



  constructor(props) {
   
    
   
    super(props);
   
    this.state = {};
   
    this.state = { visible: false };
   this.state={date:''};
   this.state={
    loading: true,
     email:'',
     password:'',
     conPassword:'',
     MobNo:'',
     FullName:'',
     City:'',
     HighEdu:'',
     Ocuupation:'',
     Contact1:'',
     Contact2:'',
     Mamkul:'',
     Address:'',
     BirthPlace:'',
     BirthTime:'',
     Age:'',
   }
   this.state = {
    value0: false,
    lineWidth: 10,
  };
  }







validateEmail=(email)=>{
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

validateMobNo =(MobNo,Contact1,Contact2)=>{
  var Mob =  /^[7-9][0-9]{9}$/
  return Mob.test(MobNo,Contact1,Contact2)

}

validateFullName=(FullName)=>{
  var Fn =/^[a-zA-Z] [a-zA-Z]+[a-zA-Z]$/
  return Fn.test(FullName)
}

validateCity=(City)=>{
  var Cn =/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
  return Cn.test(City)
}




validateBP =(BirthPlace)=>{
  var BP =/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
  return BP.test(BirthPlace)

}

//uploadImage(){}
componentDidMount() {
  
  NetInfo.addEventListener(this.handleConnectivityChange);
  this.authSubscription = firebase.auth().onAuthStateChanged(user => {
    this.setState({
      loading: false,
      user
    });
  });
}


componentWillUnmount() {
  
 NetInfo.addEventListener(this.handleConnectivityChange);
  this.authSubscription();
}

 handleConnectivityChange = state => {
        if(state.isConnected){
              
        }else{
           this.dropDownAlertRef.alert('error', 'No Internet Connection', 'On Your Internet Connection');
        }
    }

 submit(){
  if (!this.validateEmail(this.state.email) || !this.validateMobNo(this.state.MobNo) || !this.validateMobNo(this.state.Contact1)|| !this.validateMobNo(this.state.Contact2)
  ||this.state.password!=this.state.conPassword) {
     this.dropDownAlertRef.alert('error', 'कृपया पूर्ण माहिती भरा', 'तुमची माहिती पुन्हा तपसा');
  } else {
    this.setState({visible:true})
      const { email, password } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
         
          const {navigation}=this.props;
          const { email , MobNo , FullName , credit_for , date , country , states , City , marital_status , mother_tongue , zodiac_sign , 
            religion_caste , Height , blood_group , checked , HighEdu ,employee_in, Ocuupation ,
            anual_income , Contact1 , Contact2 , Mamkul , Address , BirthPlace , BirthTime , Age } = this.state;
          const data = {
            email: email,
            MobNo: MobNo,
            FullName: FullName,
            credit_for :credit_for,
            date:date,
            country:country,
            states:states,
            City:City,
            marital_status:marital_status,
            mother_tongue :mother_tongue,
            zodiac_sign :zodiac_sign,
            religion_caste :religion_caste,
            Height:Height,
            blood_group:blood_group,
            checked:checked,
            HighEdu:HighEdu,
            employee_in:employee_in,
            Ocuupation:Ocuupation,
            anual_income:anual_income,
            Contact1:Contact1,
            Contact2:Contact2,
            Mamkul:Mamkul,
            Address:Address,
            BirthPlace:BirthPlace,
            BirthTime:BirthTime,
            Age:Age,
            uid:user_uid,
            link_facebook:null,
            link_instagram:null,
            link_twitter:null,
            link_linkdin:null,
            link_pinterest:null,
            profile_picture:null,
            engage:'No',
            image1:null,
            image2:null,
            appIdentifier: "rn-android-universal-listings"
          };
          const user_uid = response.user._user.uid;
          
          firebase
            .firestore()
            .collection("users")
            .doc(user_uid)
            .set(data);
          firebase
            .firestore()
            .collection("users")
            .doc(user_uid)
            .get()
            
            .then(function(user)
             {
              
              if(user!==null){

                AsyncStorage.setItem("@loggedInUserID:id", user_uid);
                AsyncStorage.setItem("@loggedInUserID:key", email);
                AsyncStorage.setItem("@loggedInUserID:password", password);
                AsyncStorage.setItem("@loggedInUserID:checked",checked);
               
                navigation.replace('Dash',{user :user});

              } this.setState({visible:false});
              
            })
            .catch(function(error) {
              const { code, message } = error;
               this.dropDownAlertRef.alert('error', 'काहीतरी चूक होत आहे', message);
              this.setState({visible:false});
            });
            
        })
        .catch(error => {
          const { code, message } = error;
          this.dropDownAlertRef.alert('error', 'काहीतरी चूक होत आहे', message);
          this.setState({visible:false});
        });
    };
}
 


 selectDate =(date) =>{
   this.setState({date:date});
 }

 getAge() 
{
    var dateString = this.state.date;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}


  
 
    render() {
      const { checked } = this.state;
      const { visible } = this.state;
        return (
        
          <Animatable.View animation="fadeInDown"duraton="1900" style={{ flex: 1,backgroundColor:'#fff'}}>
            <StatusBar hidden={true}  barStyle="light-content" backgroundColor = "#fff" showHideTransition='fade'/>
            <ScrollView>
            <Image source={require('../images/log.png')} style={{width:'100%',height:200}}></Image>

             <Animatable.Text animation="fadeInDown"duraton="1900" style={styles.title}>Register</Animatable.Text>

             <Text style={{textAlign:'center',padding:10}}>______________________________</Text>

            

             <Content>
       
       {/*-----------------Form 1-----------------------*/}  

       <Text style={{marginLeft:50,textAlign:'left',color:'#000',fontSize:12,marginTop:20}}>Credited For</Text>

       <Form style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
            <Picker style={{color:'#616c6f',marginLeft:15}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.credit_for}onValueChange={this.updateUser}>
               <Picker.Item label ="Credited For-कोणासाठी *" value={null} disabled/>
              <Picker.Item label ="Myself-स्वतः" value="Myself" />
              <Picker.Item label="Brother-भाऊ" value="Brother" />
              <Picker.Item label="Sister-बहीण" value="Sister" />
              <Picker.Item label="Friend-मित्र" value="Friend" />
              <Picker.Item label="Relatives-नातेवाईक" value="Relatives" />
              <Picker.Item label="Daughter-मुलगी" value="Daughter" />
              <Picker.Item label="Son-मुलगा" value="Son" />
            </Picker>
            </Item>
            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
             <Input 
             style={{color:'#616c6f',marginLeft:15}} 
             placeholder='Full Name-पूर्ण नाव *'
             onChangeText={(text)=>{this.setState({FullName:text})}}
             placeholderTextColor="#616c6f"/>
           </Item>
            </Form>
       
                 <Form style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:20,marginBottom:150}}>
       
                  <Text style={{marginRight:200,color:'#000',fontSize:12}}>Login Details</Text>
       
                 <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                     style={{color:'#616c6f',marginLeft:15}} 
                     placeholder="E-mail *"
                     keyboardType='email-address'
                     onChangeText={(text) =>{this.setState({email:text})}}
                     placeholderTextColor="#616c6f"/>
                   </Item>
       
                 <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                    style={{color:'#616c6f',marginLeft:15}} 
                    placeholder='Password *'
                    secureTextEntry={true}
                    maxLength={8}
                    onChangeText={(text) =>{this.setState({password:text})}}
                    placeholderTextColor="#616c6f"/>
                 </Item>
       
                 <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                   style={{color:'#616c6f',marginLeft:15}} 
                    secureTextEntry={true}
                    maxLength={8}
                    onChangeText={(text) =>{this.setState({conPassword:text})}}
                    placeholder='Confirm Password *'
                    placeholderTextColor="#616c6f"/>
                 </Item>
       
                 <Text style={{marginRight:200,color:'#000',fontSize:12,padding:5,marginTop:20}}>Contact Details</Text>

                 <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                   style={{color:'#616c6f',marginLeft:15}} 
                    keyboardType='phone-pad'
                    maxLength={10}
                    onChangeText={(text)=>{this.setState({MobNo:text})}}
                    placeholder='Mobile Number *'
                    placeholderTextColor="#616c6f"/>
                 </Item>

                 <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                   style={{color:'#616c6f',marginLeft:15}} 
                    onChangeText={(text)=>{this.setState({Contact1:text})}}
                    placeholder='Contact No 1 *'
                    keyboardType='phone-pad'
                    maxLength={10}
                    placeholderTextColor="#616c6f"/>
                  </Item>

                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                    style={{color:'#616c6f',marginLeft:15}} 
                    placeholder='WhatsApp Number *'
                    maxLength={10}
                    keyboardType='phone-pad'
                    onChangeText={(text)=>{this.setState({Contact2:text})}}
                    placeholderTextColor="#616c6f"/>
                  </Item>

                  <Text style={{marginRight:200,color:'#000',fontSize:12,padding:5,marginTop:20}}>Birth Details</Text>
       
                  <Text style={{fontSize:12,color:'#000'}}>Date of Birth-जन्म तारीख</Text>
                        <Item style={{marginVertical:5,marginTop:10,width:'85%'}}>
                        <DatePicker 
                        style={{width:'95%',color:'#fff',alignItems:'center'}}
                        date={this.state.date}
                        format="DD-MM-YYYY"
                        minDate="10-07-1950"
                        maxDate ="31-08-2019"
                        onDateChange={this.selectDate}/>
                        </Item>

                        <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                          <Input 
                          style={{color:'#616c6f',marginLeft:15}}  
                          placeholder='Birth Place-जन्म ठिकाण'
                          
                          onChangeText={(text)=>{this.setState({BirthPlace:text})}}
                          placeholderTextColor="#616c6f"/>
                        </Item>

                        <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>

                          <Input 
                          style={{color:'#616c6f',marginLeft:15}} 
                          placeholder='Birth Time-जन्म वेळ'
                          maxLength={8}
                          onChangeText={(text)=>{this.setState({BirthTime:text})}}
                          placeholderTextColor="#616c6f"/>
                        </Item>
                        
                        <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                          <Input disabled
                          style={{color:'#616c6f',marginLeft:15}} 
                          placeholder='Age-वय'
                          keyboardType='numeric'
                          maxLength={2}
                          onChangeText={(text)=>{this.setState({Age:text})}}
                          placeholderTextColor="#616c6f"/>
                        </Item>


              <Text style={{marginRight:200,color:'#000',fontSize:12,padding:5,marginTop:20}}>Gender Details</Text>

              
              <RadioButton.Group >
                  <View style={{flexDirection: 'row',padding:0,marginRight:150}}>
                  <RadioButton value="male" status={checked === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'male' }); }}/>
                  <Text style={{marginLeft: 0,marginTop:7,color:'#616c6f',fontSize:15}}>Male-मुलगा</Text>
                  </View>

                  <View style={{flexDirection: 'row',padding:0,marginRight:135}}>
                  <RadioButton value="female" status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'female' }); }}/>
                  <Text style={{marginLeft: 0,marginTop:7,color:'#616c6f',fontSize:15}}>Female-मुलगी</Text>
                  </View>
              </RadioButton.Group>


                       <Text style={{marginRight:130,color:'#000',fontSize:12,padding:5,marginTop:20}}>Career Details-करियर तपशील</Text>

                       <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                        <Input 
                        style={{color:'#616c6f',marginLeft:15}}
                        multiline={true} 
                        onChangeText={(text)=>{this.setState({HighEdu:text})}}
                        placeholder='Highest Qualification-उच्च शिक्षण'
                        placeholderTextColor="#616c6f"/>
                      </Item>

                      <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                        <Picker  style={{color:'#616c6f',marginLeft:15}}
                          mode='dialog'
                          iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.employee_in}onValueChange={this.updateei}>
                          <Picker.Item label ="Employeed In-कर्मचारी" value="Not Mentioned" disabled={true}/>
                          <Picker.Item label ="Private Sector-खासगी क्षेत्र" value="Private Sector" />
                          <Picker.Item label ="Government/Public Sector-सरकारी क्षेत्र" value="Government/Public Sector" />
                          <Picker.Item label ="Civil Services-नागरी सेवा" value="Civil Services" />
                          <Picker.Item label ="Defence-संरक्षण क्षेत्र" value="Defence" />
                          <Picker.Item label ="Business/self Employed-स्वयंरोजगार" value="Business/self Employed" />
                          <Picker.Item label ="Not Working-बेरोजगार" value="Not Working" />
                        </Picker>
                    </Item>

                    <Item rounded rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                      <Input 
                     style={{color:'#616c6f',marginLeft:15}}
                      placeholder='Occupation-पद/व्यवसाय'
                      multiline={true}
                      onChangeText={(text)=>{this.setState({Ocuupation:text})}}
                      placeholderTextColor="#616c6f"/>
                    </Item>

                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                <Picker style={{color:'#616c6f',marginLeft:15}}
                  mode='dialog'
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.anual_income}onValueChange={this.updateai}>
                  <Picker.Item label ="Select Anual Income-वार्षिक उत्पन्न"  value="Not Mentioned" disabled={true}/>
                  <Picker.Item label ="No Income" value="No Income" />
                  <Picker.Item label ="Rs.0-1 Lakh" value="Rs.0-1 Lakh" />
                  <Picker.Item label ="Rs.1-2 Lakh" value="Rs.1-2 Lakh" />
                  <Picker.Item label ="Rs.2-3 Lakh" value="Rs.2-3 Lakh" />
                  <Picker.Item label ="Rs.3-4 Lakh" value="Rs.3-4 Lakh" />
                  <Picker.Item label ="Rs.4-5 Lakh" value="Rs.4-5 Lakh" />
                  <Picker.Item label ="Rs.5-7.5 Lakh" value="Rs.5-7.5 Lakh" />
                  <Picker.Item label ="Rs.7.5-10 Lakh" value="Rs.7.5-10 Lakh" />
                  <Picker.Item label ="Rs.10-15 Lakh" value="Rs.10-15 Lakh" />
                  <Picker.Item label ="Rs.15-20 Lakh" value="Rs.15-20 Lakh" />
                  <Picker.Item label ="Rs.20-25 Lakh" value="Rs.20-25 Lakh" />
                  <Picker.Item label ="Rs.25-35 Lakh" value="Rs.25-35 Lakh" />
                  <Picker.Item label ="Rs.35-50 Lakh" value="Rs.35-50 Lakh" />
                  <Picker.Item label ="Rs.50-70 Lakh" value="Rs.50-70 Lakh" />
                  <Picker.Item label ="Rs.70 Lakh -1 crore" value="Rs.70 Lakh -1 crore" />
                  <Picker.Item label ="Rs.1 crore & above" value="Rs.1 crore & above" />
                </Picker>
            </Item>


            <Text style={{marginRight:200,color:'#000',fontSize:12,padding:5,marginTop:20}}>Social Details</Text>

            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}} >
                  <Picker style={{color:'#616c6f',marginLeft:15}}
                  mode='dialog'
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.marital_status}onValueChange={this.updatemarry}>
                  <Picker.Item label ="Marital Status-वैवाहिक स्थिती" value="Not Mentioned" disabled={true}/>
                  <Picker.Item label ="Never Married-अविवाहित" value="Never Married" />
                  <Picker.Item label ="Awaiting Divorce-घटस्फोटाच्या प्रतीक्षेत" value="Awaiting Divorce" />
                  <Picker.Item label ="Divorced-घटस्फोटीत" value="Divorced" />
                  <Picker.Item label ="Widowed-विधवा" value="Widowed" />
                  <Picker.Item label ="Annulled-विवाह रद्द" value="Annulled" />
                  <Picker.Item label ="Married-विवाहित" value="Married" />
                </Picker>
            </Item>

            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
            <Picker style={{color:'#616c6f',marginLeft:15}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.mother_tongue}onValueChange={this.updatemt}>
               <Picker.Item label ="Mother Tongue-मातृभाषा" value="Not Mentioned" disabled={true}/>
              <Picker.Item label ="Marathi-मराठी" value="Marathi" />
              <Picker.Item label ="Hindi-हिन्दी" value="Hindi" />
              <Picker.Item label ="Telugu-तेलुगू" value="Telugu" />
              <Picker.Item label ="English-इंग्रजी" value="English" />
            </Picker>
            </Item>

            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
            <Picker style={{color:'#616c6f',marginLeft:15}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.zodiac_sign}onValueChange={this.updatezs}>
               <Picker.Item label ="Zodiac Sign-रास" value="Not Mentioned" disabled={true}/>
              <Picker.Item label ="Aries-मेष" value="Aries-मेष" />
              <Picker.Item label ="Taurus-वृषभ" value="Taurus-वृषभ" />
              <Picker.Item label ="Gemini-मिथुन" value="Gemini-मिथुन" />
              <Picker.Item label ="Cancer-कर्क" value="Cancer-कर्क" />
              <Picker.Item label ="Leo-सिंहा" value="Leo-सिंहा" />
              <Picker.Item label ="Virgo-कन्या" value="Virgo-कन्या" />
              <Picker.Item label ="Libra-तुला" value="Libra-तुला" />
              <Picker.Item label ="Scorpio-वृश्चिक" value="Scorpio-वृश्चिक" />
              <Picker.Item label ="Sagittarius-धनू" value="Sagittarius-धनू" />
              <Picker.Item label ="Capricorn-मकर" value="Capricorn-मकर" />
              <Picker.Item label ="Aquarius-कुंभ" value="Aquarius-कुंभ" />
              <Picker.Item label ="Pices-मीन" value="Pices-मीन" />
            </Picker>
            </Item>

            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
             <Picker style={{color:'#616c6f',marginLeft:15}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.religion_caste}onValueChange={this.updaterc}>
               <Picker.Item label ="Religion-Caste-धर्म जाती" value="Sonar-Panchal सोनार-पांचाळ" disabled={true}/>
              <Picker.Item label ="Sonar-Panchal सोनार-पांचाळ" value="Sonar-Panchal सोनार-पांचाळ" />
             </Picker>
            </Item>

            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
             <Picker style={{color:'#616c6f',marginLeft:15}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.Height}onValueChange={this.Height}>
               <Picker.Item label ="Height-ऊंची" value="Not Mentioned" disabled={true}/>
              <Picker.Item label ="4'0''" value="4'0''" />
              <Picker.Item label ="4'1''" value="4'1''" />
              <Picker.Item label ="4'2''" value="4'2''" />
              <Picker.Item label ="4'3''" value="4'3''" />
              <Picker.Item label ="4'4''" value="4'4''" />
              <Picker.Item label ="4'5''" value="4'5''" />
              <Picker.Item label ="4'6''" value="4'6''" />
              <Picker.Item label ="4'7''" value="4'7''" />
              <Picker.Item label ="4'8''" value="4'8''" />
              <Picker.Item label ="4'9''" value="4'9''" />
              <Picker.Item label ="4'10''"value="4'10''"/>
              <Picker.Item label ="4'11''"value="4'11''"/>
              <Picker.Item label ="5'0''" value="5'0''" />
              <Picker.Item label ="5'1''" value="5'1''" />
              <Picker.Item label ="5'2''" value="5'2''" />
              <Picker.Item label ="5'3''" value="5'3''" />
              <Picker.Item label ="5'4''" value="5'4''" />
              <Picker.Item label ="5'5''" value="5'5''" />
              <Picker.Item label ="5'6''" value="5'6''" />
              <Picker.Item label ="5'7''" value="5'7''" />
              <Picker.Item label ="5'8''" value="5'8''" />
              <Picker.Item label ="5'9''" value="5'9''" />
              <Picker.Item label ="5'10''"value="5'10''"/>
              <Picker.Item label ="5'11''"value="5'11''" />
              <Picker.Item label ="6'0''" value="6'0''" />
              <Picker.Item label ="6'1''" value="6'1''" />
              <Picker.Item label ="6'2''" value="6'2''" />
              <Picker.Item label ="6'3''" value="6'3''" />
              <Picker.Item label ="6'4''" value="6'4''" />
              <Picker.Item label ="6'5''" value="6'5''" />
              <Picker.Item label ="6'6''" value="6'6''" />
              <Picker.Item label ="6'7''" value="6'7''" />
              <Picker.Item label ="6'8''" value="6'8''" />
              <Picker.Item label ="6'9''" value="6'9''" />
              <Picker.Item label ="6'10''" value="6'10''" />
              <Picker.Item label ="6'11''" value="6'11''" />
              <Picker.Item label ="7'" value="7'" />

             </Picker>
            </Item>



            <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                <Picker  style={{color:'#616c6f',marginLeft:15}}
                  mode='dialog'
                  iosHeader="gfgfg"
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.blood_group}onValueChange={this.updatebg}> 
                  <Picker.Item style={{color:'#000'}} label ="Blood Group-रक्त गट" value="Not Mentioned" disabled={true}/>
                  <Picker.Item label ="A+" value="A+" />
                  <Picker.Item label ="O+" value="O+" />
                  <Picker.Item label ="B+" value="B+" />
                  <Picker.Item label ="AB+" value="AB+" />
                  <Picker.Item label ="A-" value="A-" />
                  <Picker.Item label ="O-" value="O-" />
                  <Picker.Item label ="B-" value="B-" />
                  <Picker.Item label ="AB-" value="AB-" />
                </Picker>
                </Item>
            

            
                <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                    style={{color:'#616c6f',marginLeft:15}}
                    placeholder='Mamkul-मामकुळ'
                    onChangeText={(text)=>{this.setState({Mamkul:text})}}
                    placeholderTextColor="#616c6f"/>
                  </Item>


                  <Text style={{marginRight:200,color:'#000',fontSize:12,padding:5,marginTop:20}}>Residential Details</Text>
                 
                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Picker style={{color:'#616c6f',marginLeft:15}}
                      mode='dialog'
                      iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.country}onValueChange={this.updatecountry}>
                      <Picker.Item label ="Choose Country-देश" value="India" disabled={true}/>
                      <Picker.Item label ="India" value="India" />
                    </Picker>
                 </Item>

                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                  <Picker style={{color:'#616c6f',marginLeft:15}}
                    mode='dialog'
                    iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.states}onValueChange={this.updateStates}>
                    <Picker.Item label ="Choose State-राज्य" value={null} disabled />
                    <Picker.Item label ="Andaman and Nicobar Islands" value="Andaman and Nicobar Islands" /><Picker.Item label ="Andhra Pradesh" value="Andhra Pradesh" /><Picker.Item label ="Arunachal Pradesh" value="Arunachal Pradesh" /><Picker.Item label ="Assam" value="Assam" /><Picker.Item label ="Bihar" value="Bihar" /><Picker.Item label ="Chandigarh union territory" value="Chandigarh union territory" />
                    <Picker.Item label ="Chhattisgarh" value="Chhattisgarh" /><Picker.Item label ="Daman and Diu union territory" value="Daman and Diu union territory" /><Picker.Item label ="National Capital Territory of Delhi union territory" value="National Capital Territory of Delhi union territory" /><Picker.Item label ="Goa" value="Goa" /><Picker.Item label ="Gujarat" value="Gujarat" /><Picker.Item label ="Haryana" value="Haryana" />
                    <Picker.Item label ="Himachal Pradesh" value="Himachal Pradesh" /><Picker.Item label ="Dadra and Nagar Haveli" value="Dadra and Nagar Haveli" /><Picker.Item label ="Jammu and Kashmir union territory" value="Jammu and Kashmir union territory" /><Picker.Item label ="Jharkhand" value="Jharkhanda" /><Picker.Item label ="Karnataka" value="Karnataka" /><Picker.Item label ="Kerala" value="Kerala" />
                    <Picker.Item label ="Ladakh union territory" value="Ladakh union territory" /><Picker.Item label ="Lakshadweep union territory" value="Lakshadweep union territory" /><Picker.Item label ="Madhya Pradesh" value="Madhya Pradesh" /><Picker.Item label ="Maharashtra" value="Maharashtra" /><Picker.Item label ="Manipur" value="Manipur" /><Picker.Item label ="Meghalaya" value="Meghalaya" />
                    <Picker.Item label ="Mizoram" value="Mizoram" /><Picker.Item label ="Nagaland" value="Nagaland" /><Picker.Item label ="Odisha" value="Odisha" /><Picker.Item label ="Puducherry union territory" value="Puducherry union territory" /><Picker.Item label ="Punjab" value="Punjab" />
                    <Picker.Item label ="Rajasthan" value="Rajasthan" /><Picker.Item label ="Sikkim" value="Sikkim" /><Picker.Item label ="Tamil Nadu" value="Tamil Nadu" /><Picker.Item label ="Telangana" value="Telangana" /><Picker.Item label ="Tripura" value="Tripura" />
                    <Picker.Item label ="Uttar Pradesh" value="Uttar Pradesh" /><Picker.Item label ="Uttarakhand" value="Uttarakhand" /><Picker.Item label ="West Bengal" value="West Bengal" />
                  </Picker>
                </Item>

                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                  <Input 
                  style={{color:'#616c6f',marginLeft:15}}
                  placeholder='Current City-सध्याचे शहर *'
                  onChangeText={(text)=>{this.setState({City:text})}}
                  placeholderTextColor="#616c6f"/>
                </Item>

                  <Item rounded style={{marginVertical:5,marginTop:10,width:'85%'}}>
                    <Input 
                    style={{color:'#616c6f',marginLeft:15}}
                    multiline={true} numberOfLines={10} 
                    onChangeText={(text)=>{this.setState({Address:text})}}
                    placeholder='Hometown address-मुख्य घरचा पत्ता'
                    placeholderTextColor="#616c6f"/>
                  </Item>


                  <View style={{flexDirection: 'row',padding:10}}>
                  
                   
                  <CheckBox 
                    
                    disabled={false}
                    value={this.state.value0}
                    onValueChange={value =>
                      this.setState({
                        value0: value,
                      })
                    }
                  />
               
                <Text style={{marginTop:7,color:'#000',fontSize:15}}>I agree to the </Text>
                <Text style={{marginLeft: 5,marginTop:7,color:'#4BCFFA',fontSize:15}} onPress={this._toggleModal}>T & C </Text> 
                <Text style={{marginTop:7,color:'#000',fontSize:15}}>and</Text>
                <Text style={{marginLeft: 5,marginTop:7,color:'#4BCFFA',fontSize:15}}onPress={this._toggleModal} >Privacy Policy</Text> 
                
              
                </View>

            <Animatable.View animation="fadeInDown" duraton="1900" >

            <TouchableOpacity  disabled={!this.state.value0 || 
                    !this.state.checked ||!this.state.FullName ||!this.state.email ||!this.state.password ||
                    !this.state.conPassword ||!this.state.credit_for ||!this.state.City }   
                    onPress={() => {this.submit()}}>
                    <LinearGradient colors={['#E5B143', '#E5B143']} style={styles.signIn}>
                            <Text style={styles.textSign}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            
            </Animatable.View>

            <Text 
            style={{
            color:'#616c6f',
            textAlign:'center',
            fontSize:15,
            marginTop:10}}>Already Register?  
            <Text style={{
              color:'#4BCFFA',
              textAlign:'center',
              fontWeight:'bold',
              
              fontSize:18}}onPress={()=>this.props.navigation.replace('Login_Screen')}>Login</Text></Text>



                <Text onPress={()=>this.props.navigation.navigate('User_guide')}>Click</Text>

                 </Form>
       
              
                  </Content>

             </ScrollView>














  {/*-----------------Terms & Condition Modal-----------------------*/}  
  <Modal s isVisible={this.state.isModalVisible} style={{margin:0}}>
          <View style={{ flex:1, width:'100%',height:10,backgroundColor:'#fff'}}>
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:25,textAlign:'center',fontWeight:'bold'}} >Terms & Condition </Text> 
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
          <ScrollView>
          <View style={{flex:1,padding:8}}>
          <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold'}} > Introduction </Text> 
          <Text style={{marginTop:7,color:'#4C4B4B',fontSize:10,fontWeight:'bold'}} > 
          Anubandha is an matrimonial app for panchal sonar community which is developed by VPS CORE LIM
          </Text> 
          <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold'}} > Restrictions </Text> 
          <Text style={{marginTop:7,color:'#000',fontSize:12}} > You are specifically restricted from all of the following: </Text> 
          <Text style={{marginTop:7,color:'#4C4B4B',fontSize:10,fontWeight:'bold'}} > 
            publishing any App material in any other media {"\n"}{"\n"}

            selling, sublicensing and/or otherwise commercializing any App material{"\n"}{"\n"}

            publicly performing and/or showing any App material{"\n"}{"\n"}

            using this App in any way that is or may be damaging to this App{"\n"}{"\n"}

            using this App in any way that impacts user access to this App{"\n"}{"\n"}

            using this App contrary to applicable laws and regulations, or in any way may cause harm to the App, or to any person or business entity{"\n"}{"\n"}

            engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this App{"\n"}{"\n"}

            using this App to engage in any advertising or marketing.{"\n"}{"\n"}

            Certain areas of this App are restricted from being access by you and Company may further restrict access by you to any areas of this App ,at any time, in absolute discretion. Any user ID and password you may have for this App  are confidential and you must maintain confidentiality as well.{"\n"}{"\n"}
          </Text> 
          <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold'}} > Your Content </Text> 
          <Text style={{marginTop:7,color:'#4C4B4B',fontSize:10,fontWeight:'bold'}} > 
          Your Content must be your own and must not be invading any third-party's rights. VPS CORE LIM reserves the right to remove any of Your Content from this Website at any time without notice.
          </Text> 
          <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold'}} > Indemnification </Text> 
          <Text style={{marginTop:7,color:'#4C4B4B',fontSize:10,fontWeight:'bold'}} > 
          You hereby indemnify to the fullest extent Company from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </Text> 
          <Text style={{marginTop:7,color:'#4BCFFA',fontSize:15,fontWeight:'bold'}} > Privacy Policy for Anubandha </Text> 
          <Text style={{marginTop:7,color:'#4C4B4B',fontSize:10,fontWeight:'bold'}} > 
          At App Name, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by App Name and how we use it.
          {"\n"}{"\n"}
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at contact@vpscorelim.xyz
          </Text> 
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:15,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> VPS CORE LIM </Text>
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >www.vpscorelim.xyz </Text>  
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
          </View>
           
            <Animatable.View animation="fadeInDown" duraton="1900" >
                  <TouchableOpacity style={{alignItems:'center'}} onPress={this._toggleModal} >
                    <LinearGradient
                            colors={['#000', '#000']}
                            style={styles.signIn1}>
                            <Text style={styles.textSign1}>Accept & Continue</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            
            </Animatable.View>
            

           
            </ScrollView>
          </View>
        </Modal>
 {/*-----------------Terms & Condition Modal-----------------------*/} 








            
          </Animatable.View>
           
           
        )
    }
}
export default Login;



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        marginTop:50,
        textAlign:'center',
        fontFamily:'GoogleSans-Bold',
    },
    container1: {
      alignItems:"center"  
    },
    textStyle: {
      fontWeight:"bold",
      fontSize:30,
      textAlign:"center",
      color:"red",
      marginTop:10     
    },
    placeholder: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#eee",
      width: "70%",
      height: 280,
      marginTop:50, 
    },
    
    previewImage: {
        width: "100%",
        height: "100%"
    },
    fitImage: {
      borderRadius: 20,
    },
    fitImageWithSize: {
      height: 100,
      width: 30,
    },
    image1:{
      resizeMode:'contain',
      flex:1,
      aspectRatio:1,
    },
    imgcontainer:{
      flexDirection:'row',
      padding:10
     
    },
    button: {
      width: "80%",
      marginTop:20,
      flexDirection:"row",
      justifyContent: "space-around"
    },
      lottie: {
        width: 100,
        height: 100
      },
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
signIn1: {
  width: '100%',
  height: 50,
  marginTop:15,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 0,
  marginBottom:50,
  flexDirection: 'row'
},
textSign1: {
color: '#fff',
fontWeight: 'bold'
},
    
})

