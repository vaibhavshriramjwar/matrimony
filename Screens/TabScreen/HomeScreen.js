
import React, { Component} from 'react';
import { Text, 
    View ,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    StyleSheet,
    Linking, 
    RefreshControl,
    ActivityIndicator,
    } from 'react-native';
    import { Content} from 'native-base';
import {CustomHeader} from '../index' ; 
import { SliderBox } from "react-native-image-slider-box";
import { IMAGE } from '../image';
import FastImage from 'react-native-fast-image'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import {getFoods} from './userApi';
import { Button} from 'react-native-paper';
import { ListItem, Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-picker";
import PropTypes from 'prop-types'
import AnimatedLoader from "react-native-animated-loader";
import Toast from 'react-native-tiny-toast'
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
const adUnitId ='ca-app-pub-2370607102762462/5574969813';
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export class HomeScreen extends Component {

  state = {
    imgSource: '',
    imgSource2: '',
    imgSource3: '',
    uploading: false,
    progress: 0,
    images: []
  };

  state = {
    foodList: [],
    selectedIndex: 0
  }

  constructor(props) {
    super(props);
    
    this.state={uid :''};
    this.state={uid2 :''};
    //Images Urls
    this.state={profile_picture:''};
    this.state={image1:''};
    this.state={image2:''};
    this.state={account:'this is your account'};
    this.state={accountnot:'this is your account'};

    this.state = {
      images: [
        IMAGE.BANNER_1,
        IMAGE.BANNER_2,
        IMAGE.BANNER_3,
        IMAGE.BANNER_4,
        IMAGE.BANNER_5,
        // Network image
                 // Local image
      ]
    };
  }
 
 

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




  onFoodsReceived = (foodList) => {
   
    this.setState(prevState => ({
      foodList: prevState.foodList = foodList
    }));
  }


  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

 
  componentDidMount(){
   
   NetInfo.addEventListener(this.handleConnectivityChange);
    this.loadData();
      getFoods(this.onFoodsReceived);
  
  }
 componentWillUnmount() {
 NetInfo.addEventListener(this.handleConnectivityChange);
 
}
handleConnectivityChange = state => {
        if(state.isConnected){
              
        }else{
          alert('No Internet Connection')
        }
    }
 

  loadData = () =>{
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
         
         const email =user.email;
         const uid =user.uid;
         
          
          firebase.firestore().collection('users').doc(uid).onSnapshot((doc)=>{
          if(doc.exists){
         
          const {FullName}=doc.data();
          const {uid}=doc.data();
        
          const {profile_picture}=doc.data();
          const {image1}=doc.data();
          const {image2}=doc.data();

          this.setState({FullName:FullName});
          this.setState({uid2:uid});
          this.setState({profile_picture:profile_picture});
          this.setState({image1:image1});
          this.setState({image2:image2});


          if(this.state.profile_picture==null||this.state.image1==null){

          this.setState({isModalVisible:true})
          
          firebase.auth().onAuthStateChanged((user)=>{
            if(user){ 
            const uid =user.uid;
            if(this.state.uid2==null){
              firebase.firestore().collection('users').doc(uid).update({
                'uid':uid
              })
            }
            else{}}else{}})}else{}}})}else{}})

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
                                     alert('Image Uploded')
                                   
                                   }else{
                                    alert('Something Goes wrong')
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
                                alert('Image Uploded')
                              
                              }else{
                                alert('Something Goes wrong')
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
                                alert('Image Uploded')
                              
                              }else{
                                alert('Something Goes wrong')
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
            <View style={{ flex: 1,backgroundColor:'#fff'}}>
                <StatusBar hidden={true}  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
              
               

              < AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={IMAGE.LOADING_5}
                            animationStyle={styles.lottie}
                            speed={1}>
              </AnimatedLoader>




              <Modal s isVisible={this.state.isModalVisible} i>
                  <View style={{ flex:1, width:'100%',height:10,backgroundColor:'#fff'}}>
                              <Text style={{marginLeft: 5,marginTop:7,color:'red',fontSize:25,textAlign:'center',fontWeight:'bold'}} >Upload Images* </Text> 
                              <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
                              <Text style={{color:'red',fontSize:20,textAlign:'center'}}>All Photos are mandatory*</Text>
                     <ScrollView>
                        
                     <View style={{flex:1,padding:8}}>
          {/*----------------------------Profile Picture Section----------------------------------*/}   
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > Profile Picture </Text> 
                     <View style={styles.imgcontainer}>
                     {imgSource !== '' &&(
                              <FastImage 
                               resizeMode={FastImage.resizeMode.cover}
                              style={{width:100,height:100,borderRadius:100/2,borderWidth: 1,borderColor: 'black',backgroundColor: '#eee'}} 
                              source={imgSource} resizeMode='cover'>
                              </FastImage>
                           )}
                     </View>
                     <View style={{flexDirection:'row', justifyContent: "center"}}>
                        <Button  onPress={this.pickImage} style={{fontWeight:'bold',color:'#8667EB',padding:5}}>Select</Button>
                        <Button disabled={!imgSource} mode="contained"onPress={() => {this.submitProfile()}} style={{backgroundColor:'#8667EB',fontWeight:'bold',color:'#fff',padding:5}}>Upload</Button>
                     </View> 
          {/*----------------------------End Section----------------------------------*/} 


         {/*----------------------------First Picture Section----------------------------------*/} 
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > First Picture </Text> 
                     <View style={styles.imgcontainer}>
                     {imgSource2 !== '' &&(
                              <FastImage 
                               resizeMode={FastImage.resizeMode.contain}
                              style={styles.image1} 
                              source={imgSource2}>
                              </FastImage>
                              )}
                     </View>
                     <View style={{flexDirection:'row', justifyContent: "center"}}>
                        <Button  onPress={this.pickImageHandler1} style={{fontWeight:'bold',color:'#8667EB',padding:5}}>Select</Button>
                        <Button disabled={!imgSource2} mode="contained" onPress={() => {this.uploadFirstPicture()}} style={{backgroundColor:'#8667EB',fontWeight:'bold',color:'#fff',padding:5}}>Upload</Button>
                     </View>  
          {/*----------------------------End Section----------------------------------*/}    


         {/*----------------------------Second Picture Section----------------------------------*/} 
                     <Text style={{marginTop:7,color:'#000',fontSize:15,fontWeight:'bold',textAlign:'center'}} > Second Picture </Text> 
                     <View style={styles.imgcontainer}>
                     {imgSource3 !== '' &&(
                              <FastImage 
                               resizeMode={FastImage.resizeMode.contain}
                              style={styles.image1}
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
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:15,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> VPS CORE LIM </Text>
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >www.vpscorelim.xyz </Text>  
          <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
          </View>


            <TouchableOpacity disabled={!imgSource||!imgSource2} style={{alignItems:'center'}} onPress={this._toggleModal}>
              <Button disabled={!imgSource||!imgSource2}  mode="contained"style={{backgroundColor:'#4BCFFA',width:'50%',fontWeight:'bold',color:'#fff',alignContent:'center',marginBottom:10}}>Back</Button>
            </TouchableOpacity>


            </ScrollView>
          </View>
   </Modal>


<View>

              <ScrollView showsVerticalScrollIndicator={false} >
              <SliderBox images={this.state.images}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                      position: "absolute",
                      bottom: 0,
                      padding: 0,
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                      paddingVertical: 10
                    }}
                    dotStyle={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      marginHorizontal: 0,
                      padding: 0,
                      margin: 0,
                      backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                    ImageComponentStyle={{ width: '100%'}}
                    imageLoadingColor="#000"/>

                    

               <View >
               


               <FlatList contentContainerStyle={{padding:10,alignItems:'center',marginTop:10}}
          data={this.state.foodList}
         
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
            
             <View style={styles.viewContainer}>
               <FastImage source=
               {(item.profile_picture === null) ? IMAGE.ICON_PROFILE : { uri: item.profile_picture}} 
               style={styles.profile} >
               </FastImage>
               <Text style={styles.line}>______________________________</Text>
               <Text style={styles.name}>{item.FullName}</Text>
               <Text style={styles.subtitle}>{`Age: ${item.Age}`}</Text>
               <Text style={styles.subtitle}>{`Profile: ${(item.uid === this.state.uid2)?
               "Your own profile"
                :"another" }`}</Text>
               <View style={styles.button}>
            <TouchableOpacity 
            disabled={item.uid ===this.state.uid2}
            onPress={() => {
              this.setState(prevState => ({ selectedIndex: prevState.selectedIndex = index }))
              this.props.navigation.navigate('HomeDetail', { food: item})
            }
            } >
            <LinearGradient
                    
                    colors={['#BB2CD9', '#8B78E6']}
                    style={styles.signIn}>
                        
                    <Text style={styles.textSign}>View</Text>
                  
                </LinearGradient>
            </TouchableOpacity>
           
            </View>


             </View>
            
              );
            }
            }
          />


               </View>
              <View style={{alignItems:'center',padding:20,marginBottom:50}}>
              <BannerAd
             unitId={adUnitId}
              size={BannerAdSize.MEDIUM_RECTANGLE}
               requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                  }}/>
                  <Text style={{padding:15,textAlign:'center',fontSize:10}}>Copyright © 2020 VPSCORELIM | Powered by VPS CORE LIM</Text>
              </View>
              
               </ScrollView>
               </View>
               <DropdownAlert closeInterval={3000} ref={ref => this.dropDownAlertRef = ref} />
            </View>
          );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 15
  },
  subtitleStyle: {
    fontSize: 10
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  viewContainer:{
    borderRadius:20,
    alignItems:'center',
    backgroundColor:'#fff',
    padding:10,
    marginTop:25,
    width:300,
    height:350,
    
   },
   lottie: {
    width: 200,
    height: 200
  },
   profile:{
     alignItems:'center',
     width:150,
     height:150,
     marginTop:10,
     borderRadius:150/2
   },
   line:{
    color:'#8667EB'
   },
   name:{
    fontSize:18,
    marginTop:2,
    padding:2,
    color:'#4BCFFA',
    textAlign:'center',
    fontFamily:'Noto Sans Bold'
   },
   subtitle:{
    fontSize:12,
    marginTop:2,
    padding:2,
    color:'#A4B0BD',
    textAlign:'center',
    fontFamily:'Noto Sans Bold'
   },
   button: {
    alignItems: 'flex-end',
    marginTop: 10,
    
},
signIn: {
  width: 150,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  flexDirection: 'row'
},
textSign: {
  color: '#fff',
  fontWeight: 'bold'
},
image1:{
  borderWidth: 1,borderColor: 'black',backgroundColor: '#eee',
  resizeMode:'contain',
  flex:1,
  aspectRatio:1,
},
imgcontainer:{
  flexDirection:'row',
  padding:10,
  justifyContent:'center'
},
});

