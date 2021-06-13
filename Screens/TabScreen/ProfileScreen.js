import React, { Component } from 'react';
import { Text, 
    View ,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    StyleSheet,
    ImageBackground,
    } from 'react-native';

    import {
      Container, 
      Header, 
      Content,
      Item, 
      Input, 
      Label,
      Right, 
      Body, 
      Left, 
      Picker, 
      Form,
      
      Textarea } from 'native-base';
import { Button} from 'react-native-paper';
import GradientHeader from "react-native-gradient-header";
import {CustomHeader} from '../index' ;   
import { IMAGE } from '../image';
import FastImage from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
//import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import AnimatedLoader from "react-native-animated-loader";
var defaultImage =require('./TabImages/step1.jpg');
var defaultProfile = require('./TabImages/userphoto.png')
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
const adUnitId ='ca-app-pub-2370607102762462/5574969813';
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'

const options = {
   title: 'Select Image',
   storageOptions: {
     skipBackup: true,
     path: 'images'
   }
 };


export class ProfileScreen extends Component {

   
  
   
   state = {
      imgSource: '',
      imgSource2: '',
      imgSource3: '',
      uploading: false,
      progress: 0,
      images: []
    };

    state = {
      isModalVisible: false
    };

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });



  //Profile Picture------------------------------------------------
  state = {
    imgSource: null
  }
  reset1 = () => {
    this.setState({
      imgSource: null
    });
  }
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source,
          imageUri: response.uri
        });
      }
    });
  };
  resetHandler1 = () =>{
    this.reset1();
  }
//End of Profile Pic---------------------------------------------------------


//-----------------------------Second Image------------------------------------------------
state = {
  imgSource2: null
}
reset1 = () => {
  this.setState({
    imgSource2: null
  });
}
pickImageHandler1 = () => {
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('You cancelled image picker 😟');
    } else if (response.error) {
      alert('And error occured: ', response.error);
    } else {
      const source = { uri: response.uri };
      this.setState({
        imgSource2: source,
        imageUri2: response.uri
      });
    }
  });
  
}
resetHandler2 = () =>{
  this.reset2();
}
//------------------------End of Profile Pic---------------------------------------------------------


//-----------------------------Second Image------------------------------------------------
state = {
  imgSource3: null
}
reset1 = () => {
  this.setState({
    imgSource3: null
  });
}
pickImageHandler2 = () => {
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('You cancelled image picker 😟');
    } else if (response.error) {
      alert('And error occured: ', response.error);
    } else {
      const source = { uri: response.uri };
      this.setState({
        imgSource3: source,
        imageUri3: response.uri
      });
    }
  });
  
}
resetHandler2 = () =>{
  this.reset2();
}
//------------------------End of Profile Pic---------------------------------------------------------






   

   constructor(props) {
      super(props);
      this.state = { visible: false };
      //General Info
      this.state={uid :''};
      this.state={FullName :''};
      this.state={email:''};

      //Contact Numbers
      this.state={MobNo : ''};
      this.state={Contact1 : ''};
      this.state={Contact2 : ''};

      //Other Details
      this.state={credit_for :''};
      this.state={country :''};
      this.state={states :''};
      this.state={City :''};
      this.state={Address :''};

      //Social Details
      this.state={marital_status :''};
      this.state={mother_tongue :''};
      this.state={zodiac_sign :''};
      this.state={religion_caste :''};
      this.state={Mamkul :''};
      
      //Health Details
      this.state={Height :''};
      this.state={blood_group:''};
      this.state={checked :''};

      //Career Details
      this.state={HighEdu :''};
      this.state={employee_in :''};
      this.state={Ocuupation :''};
      this.state={anual_income :''};

      //Birth Details
      this.state={date :''};
      this.state={BirthTime :''};
      this.state={BirthPlace :''};
      this.state={Age :''};

      //Images Urls
      this.state={profile_picture:''};
      this.state={image1:''};
      this.state={image2:''};
     
   }


   

   componentDidMount() {
      NetInfo.addEventListener(this.handleConnectivityChange);
     this.loadData();
   }

componentWillUnmount() {
 NetInfo.addEventListener(this.handleConnectivityChange);
 
}

 handleConnectivityChange = state => {
        if(state.isConnected){
              
        }else{
           this.dropDownAlertRef.alert('error', 'No Internet Connection', 'On Your Internet Connection');
        }
    }


  

   




   loadData = () =>{
    this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
         if(user){
             //General Info
             //Contact Numbers
             //Other Details
             //Social Details
             //Health Details
             //Career Details
             //Birth Details
             //Images Urls
            const email =user.email;
            const uid =user.uid;
             //Console Data
             
             

             firebase.firestore().collection('users').doc(uid).onSnapshot((doc)=>{
                if(doc.exists){
             //General Info
             const {FullName}=doc.data();
             //Contact Numbers
             const {MobNo}=doc.data();
             const {Contact1}=doc.data();
             const {Contact2}=doc.data();

             //Other Details
             const {credit_for}=doc.data();
             const {country}=doc.data();
             const {states}=doc.data();
             const {City}=doc.data();
             const {Address}=doc.data();

             //Social Details
             const {marital_status}=doc.data();
             const {mother_tongue}=doc.data();
             const {zodiac_sign}=doc.data();
             const {religion_caste}=doc.data();
             const {Mamkul}=doc.data();

             //Health Details
             const {Height}=doc.data();
             const {blood_group}=doc.data();
             const {checked}=doc.data();

             //Career Details
             const {HighEdu}=doc.data();
             const {employee_in}=doc.data();
             const {Ocuupation}=doc.data();
             const {anual_income}=doc.data();

             //Birth Details
             const {date}=doc.data();
             const {BirthTime}=doc.data();
             const {BirthPlace}=doc.data();
             const {Age}=doc.data();

             //Images Urls
             const {profile_picture}=doc.data();
             const {image1}=doc.data();
             const {image2}=doc.data();

             
            

             //General Info
            this.setState({FullName:FullName});
            this.setState({email:email});
            this.setState({uid:uid});
             //Contact Numbers
            this.setState({MobNo:MobNo});
            this.setState({Contact1:Contact1});
            this.setState({Contact2:Contact2});
            //Other Details
            this.setState({credit_for:credit_for});
            this.setState({country:country});
            this.setState({states:states});
            this.setState({City:City});
            this.setState({Address:Address});
            //Social Details
            this.setState({marital_status:marital_status});
            this.setState({mother_tongue:mother_tongue});
            this.setState({zodiac_sign:zodiac_sign});
            this.setState({religion_caste:religion_caste});
            this.setState({Mamkul:Mamkul});
            //Health Details
            this.setState({Height:Height});
            this.setState({blood_group:blood_group});
            this.setState({checked:checked});
            //Career Details
            this.setState({HighEdu:HighEdu});
            this.setState({employee_in:employee_in});
            this.setState({Ocuupation:Ocuupation});
            this.setState({anual_income:anual_income});
             //Birth Details
            this.setState({date:date});
            this.setState({BirthTime:BirthTime});
            this.setState({BirthPlace:BirthPlace});
            this.setState({Age:Age});
            //Images Urls
            this.setState({profile_picture:profile_picture});
            this.setState({image1:image1});
            this.setState({image2:image2});
            this.setState({visible:false});
                }
             })
             
         }else{
             this.dropDownAlertRef.alert('error', 'Something Goes Wrong', 'Your Data Not Load');
         }
      })


   }
  




   submitProfile(){
    this.setState({visible:true});
         const ext = this.state.imageUri.split('.').pop();
         this.setState({ uploading: true });
         var storageRef = firebase.storage().ref(`tutorials/images/${ext}`);
         return storageRef.putFile(this.state.imageUri)
                .on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    snapshot => {
                    let state = {};
                    state = {
                      ...state,
                      progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
                    };
                            if(snapshot.state === firebase.storage.TaskState.SUCCESS){

                                storageRef.getDownloadURL()
                                .then((downloadUrl => {
                                  
                                      firebase.auth().onAuthStateChanged((user)=>{
                                        if(user){ 
                                        const email =user.email;
                                        const uid =user.uid;
                                          firebase.firestore().collection('users').doc(uid).update({
                                            "profile_picture":downloadUrl
                                          });
                                         this.setState({visible:false});
                                            alert('Image Upload Succesfuly')
                                        
                                        }else{
                                         this.setState({visible:false});
                                         alert('Something goes wrong')
                                      }
                                      })
                      }))
               }
               this.setState(state);
        });
      
      
   }
        


   uploadFirstPicture(){

    this.setState({visible:true});
    const ext = this.state.imageUri2.split('.').pop();
    this.setState({ uploading: true });
    var storageRef = firebase.storage().ref(`tutorials/images/${ext}`);
    return storageRef.putFile(this.state.imageUri2)
           .on(
               firebase.storage.TaskEvent.STATE_CHANGED,
               snapshot => {
               let state = {};
               state = {
                 ...state,
                 progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
               };
                       if(snapshot.state === firebase.storage.TaskState.SUCCESS){

                           storageRef.getDownloadURL()
                           .then((downloadUrl => {
                             
                                 firebase.auth().onAuthStateChanged((user)=>{
                                   if(user){ 
                                   const email =user.email;
                                   const uid =user.uid;
                                     firebase.firestore().collection('users').doc(uid).update({
                                       
                                       "image1":downloadUrl 
                                       
                                     });
                                   this.setState({visible:false});
                                    alert('Image Upload Succesfuly')
                                   
                                   }else{
                                    this.setState({visible:false});
                                     alert('Something goes wrong')
                                 }
                                 })
                 }))
          }
          this.setState(state);
   });




   }



  uploadSecondPicture(){
   this.setState({visible:true});
    const ext = this.state.imageUri3.split('.').pop();
    this.setState({ uploading: true });
    var storageRef = firebase.storage().ref(`tutorials/images/${ext}`);
    return storageRef.putFile(this.state.imageUri3)
           .on(
               firebase.storage.TaskEvent.STATE_CHANGED,
               snapshot => {
               let state = {};
               state = {
                 ...state,
                 progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
               };
                       if(snapshot.state === firebase.storage.TaskState.SUCCESS){

                           storageRef.getDownloadURL()
                           .then((downloadUrl => {
                             
                                 firebase.auth().onAuthStateChanged((user)=>{
                                   if(user){ 
                                   const email =user.email;
                                   const uid =user.uid;
                                     firebase.firestore().collection('users').doc(uid).update({
                                       
                                       "image2":downloadUrl 
                                       
                                     });
                                   this.setState({visible:false});
                                     alert('Image Upload Succesfuly')
                                   
                                   }else{
                                   this.setState({visible:false});
                                     alert('Something goes wrong')
                                 }
                                 })
                 }))
          }
          this.setState(state);
   });




  }





    render() {
      const { visible } = this.state;
      const { imgSource,imgSource2,imgSource3, images} = this.state;
        return (
            <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
            <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>


            < AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={IMAGE.LOADING_5}
                            animationStyle={styles.lottie}
                            speed={1}>
                              
                            </AnimatedLoader>





            <Modal s isVisible={this.state.isModalVisible}>
                  <View style={{ flex:1, width:'100%',height:10,backgroundColor:'#fff'}}>
                              <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:25,textAlign:'center',fontWeight:'bold'}} >Upload Images </Text> 
                              <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
                     <ScrollView>
                        
                     <View style={{flex:1,padding:8}}>
          {/*----------------------------Profile Picture Section----------------------------------*/}   
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > Profile Picture </Text> 
                     <View style={styles.imgcontainer}>
                           {imgSource !== '' &&(
                              <FastImage 
                              resizeMode={FastImage.resizeMode.cover}
                              style={{width:100,height:100,borderRadius:100/2,borderWidth: 1,borderColor: 'black',backgroundColor: '#eee'}}
                               source={imgSource}>
                               </FastImage>
                           )}
                     </View>
                     <View style={{flexDirection:'row', justifyContent: "center"}}>
                        <Button  onPress={this.pickImage} style={{fontWeight:'bold',color:'#8667EB',padding:5}}>Select</Button>
                        <Button disabled={!imgSource}  mode="contained"onPress={() => {this.submitProfile()}} style={{backgroundColor:'#8667EB',fontWeight:'bold',color:'#fff',padding:5}}>Upload</Button>
                     </View> 
          {/*----------------------------End Section----------------------------------*/} 


         {/*----------------------------First Picture Section----------------------------------*/} 
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > First Picture </Text> 
                     <View style={styles.imgcontainer}>
                              {imgSource2 !== '' &&(
                              <FastImage 
                              resizeMode={FastImage.resizeMode.contain}
                              style={styles.image12} 
                              source={imgSource2}>
                              </FastImage>
                              )}
                     </View>
                     <View style={{flexDirection:'row', justifyContent: "center"}}>
                        <Button  onPress={this.pickImageHandler1} style={{fontWeight:'bold',color:'#8667EB',padding:5}}>Select</Button>
                        <Button mode="contained"disabled={!imgSource2} onPress={() => {this.uploadFirstPicture()}} style={{backgroundColor:'#8667EB',fontWeight:'bold',color:'#fff',padding:5}}>Upload</Button>
                     </View>  
          {/*----------------------------End Section----------------------------------*/}    


         {/*----------------------------Second Picture Section----------------------------------*/} 
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > Second Picture </Text> 
                     <View style={styles.imgcontainer}>
                              {imgSource3 !== '' &&(
                              <FastImage 
                              resizeMode={FastImage.resizeMode.contain}
                              style={styles.image12} 
                              source={imgSource3}>
                              </FastImage>
                              )}
                     </View>
                     <View style={{flexDirection:'row', justifyContent: "center"}}>
                        <Button  onPress={this.pickImageHandler2} style={{fontWeight:'bold',color:'#8667EB',padding:5}}>Select</Button>
                        <Button disabled={!imgSource3} mode="contained" onPress={() => {this.uploadSecondPicture()}} style={{backgroundColor:'#8667EB',fontWeight:'bold',color:'#fff',padding:5}}>Upload</Button>
                     </View> 
          {/*----------------------------End Section----------------------------------*/} 

   
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
         <View style={{alignItems:'center'}}>
                        <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />
          </View>
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
          </View>


            <TouchableOpacity style={{alignItems:'center'}} onPress={this._toggleModal}>
              <Button mode="contained"style={{backgroundColor:'#4BCFFA',width:'50%',fontWeight:'bold',color:'#fff',alignContent:'center',marginBottom:10}}>Back</Button>
            </TouchableOpacity>


            </ScrollView>
          </View>
   </Modal>







   
              <CustomHeader  title="Your Profile" isHome={true} navigation={this.props.navigation} />

              

              <ScrollView showsVerticalScrollIndicator={false}>
              
              <ImageBackground imageStyle={{marginRight:30}} source={IMAGE.IMAGE_DRAWER2} style={styles.ImgContainer}>
              <Text style={styles.titleusername}>Profile</Text>
             
              <TouchableOpacity>
                     
              <FastImage
                    style={styles.userPhoto}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.profile_picture === null) ? defaultProfile  : { uri: this.state.profile_picture }}
                  />
             </TouchableOpacity>
            
                    <Text style={styles.line}>______________________________</Text>

        <TouchableOpacity><Text style={styles.titleusername}>{this.state.FullName}</Text></TouchableOpacity>
             
        <TouchableOpacity><Text style={styles.titleemail}>{this.state.email}</Text></TouchableOpacity> 
                   
              
                   
            </ImageBackground>

            

            <View style={styles.viewContainer}>
              <Text style={styles.username}>Contacts</Text>
              <TouchableOpacity>
                     
             </TouchableOpacity>
                    <Text style={styles.line}>______________________________</Text>

             <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
                <Icon name="cellphone" color='#A4B0BD'size={22}/>
                <Text style={styles.contact}>{this.state.MobNo}</Text>
             </TouchableOpacity>
             
             <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
             <Icon name="cellphone" color='#A4B0BD'size={22}/>
               <Text style={styles.contact}>{this.state.Contact1}</Text>
             </TouchableOpacity> 

             <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
             <Icon name="cellphone" color='#A4B0BD'size={22}/>
               <Text style={styles.contact}>{this.state.Contact2}</Text>
             </TouchableOpacity>
                     
            </View>
            <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />
            <View style={styles.viewContainer}>
              <Text style={styles.username}>Other Details</Text>
              
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={styles.hedaing}>Credited For</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="face-profile" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.credit_for}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Country</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.country}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>State</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.states}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>City</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.City}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Complete Address</Text>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.contact}>{this.state.Address}</Text>
             </TouchableOpacity>
             
            
                     
            </View>
            
            <Image style={{width:330,height:120,marginTop:10}} resizeMode='stretch' source={IMAGE.IMAGE_AD}></Image>

            <View style={styles.viewContainer}>
              <Text style={styles.username}>Social Details</Text>
              
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={styles.hedaing}>Marital Status</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="nature-people" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.marital_status}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Mother Tongue</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="translate" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.mother_tongue}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Zodiac Sign</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="alpha-z-box-outline" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.zodiac_sign}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Religion-Caste</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="hinduism" color='#A4B0BD'size={20}/>
        <Text style={styles.contact}>{this.state.religion_caste}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Mamkul</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.Mamkul}</Text>
             </TouchableOpacity>
  
            </View>


            <View style={styles.viewContainer}>
              <Text style={styles.username}>Health Details</Text>
              
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={styles.hedaing}>Height</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="gender-male-female" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.Height}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Blood Group</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="blood-bag" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.blood_group}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Gender</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="gender-male-female" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.checked}</Text>
             </TouchableOpacity>

            
  
            </View>

            <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />

            <View style={styles.viewContainer}>
              <Text style={styles.username}>Career Details</Text>
              
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={styles.hedaing}>Highest Qualification</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="alpha-q-box-outline" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.HighEdu}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Employeed In</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="alpha-q-box-outline" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.employee_in}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Occupation</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="transit-transfer" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.Ocuupation}</Text>
             </TouchableOpacity>


             <Text style={styles.hedaing}>Anual Income</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="cash-100" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.anual_income}</Text>
             </TouchableOpacity>

            
  
            </View>

            <View style={styles.viewContainer}>
              <Text style={styles.username}>Birth Details</Text>
              
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={styles.hedaing}>Date of Birth</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="cake" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.date}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Birth Time</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="av-timer" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.BirthTime}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Birth Place</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.BirthPlace}</Text>
             </TouchableOpacity>


             <Text style={styles.hedaing}>Age</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="face-profile" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{this.state.Age}</Text>
             </TouchableOpacity>

            
  
            </View>


            <View style={styles.viewContainer}>
              <Text style={styles.username}>Images</Text>
              
                    <Text style={styles.line}>______________________________</Text>


                  
                     
                    <Text style={styles.hedaing}>First Image</Text>
                    <View style={styles.imgcontainer}>

                    <FastImage
                    style={styles.image1}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.image1 === null) ? IMAGE.GALLERY_ADD : { uri: this.state.image1} }
                  />

                    
                    </View>
                   

                    
                    <Text style={styles.hedaing}>Second Image</Text>
                    <View style={styles.imgcontainer}>

                    <FastImage
                    style={styles.image1}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.image2 === null) ? IMAGE.GALLERY_ADD : { uri: this.state.image2} }
                  />
                    </View>
                   

                    <TouchableOpacity>
                     <Button style={{fontWeight:'bold'}} onPress={this._toggleModal}>Add Images</Button>
                    </TouchableOpacity>
  
            </View>

            <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />


            <View style={{marginTop:5,padding:10}}>
          
           <Button style={{backgroundColor:'#8667EB',fontWeight:'bold'}} mode="contained"onPress={()=>this.props.navigation.navigate('ImageUpload')}>Edit Profile</Button>
         
            </View>

            <Text style={{padding:15,textAlign:'center',fontSize:10}}>Copyright © 2020 VPSCORELIM | Powered by VPS CORE LIM</Text>

               </ScrollView>
              <DropdownAlert closeInterval={3000} ref={ref => this.dropDownAlertRef = ref} />
            </View>
          );
    }
}
const styles = StyleSheet.create({
 username:{
   fontSize:18,
   marginTop:2,
   padding:2,
   color:'#A4B0BD',
   fontFamily:'Noto Sans Bold'
 },
 email:{
  fontSize:15,
  padding:2,
  color:'#A4B0BD',
  fontFamily:'Noto Sans'
},
hedaing:{
  fontSize:13,
  padding:2,
  color:'#A4B0BD',
  textAlign:'center',
  fontFamily:'Noto Sans'

},
contact:{
  fontSize:15,
  padding:2,
  color:'#000',
  textAlign:'center',
  fontFamily:'Noto Sans'
},

 viewContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  width:330,
  padding:15,
  marginTop:15,
  marginBottom:15

 },
 ImgContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  
  width:330,
  padding:15,
  marginTop:15},
 
 
 line:{
  color:'#8667EB'
 },
 line2:{
  color:'#A4B0BD'
 },
 titleusername :{
  fontSize:18,
  marginTop:2,
  padding:2,
  color:'#fff',
  fontFamily:'Noto Sans Bold'
 },
 titleemail:{
  fontSize:15,
  padding:2,
  color:'#fff',
  fontFamily:'Noto Sans'
},
image1:{
  
   flex:1,
   aspectRatio:1,
 },
 image12:{
     borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
   flex:1,
   aspectRatio:1,
 },
 imgcontainer:{
   flexDirection:'row',
   padding:10,
   justifyContent:'center'
 },
 button: {
   width: "80%",
   marginTop:20,
   flexDirection:"row",
   justifyContent: "center"
 },
 lottie: {
  width: 200,
  height: 200
},
line:{
  color:'#8667EB'
 },
 line2:{
  color:'#A4B0BD'
 },
 userPhoto: {
  height:100,
  width:100,
  borderRadius:60,
  marginTop:50
}
 
});


 
 