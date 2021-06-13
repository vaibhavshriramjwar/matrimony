import React, { Component } from 'react';
import { Text, 
    View ,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    StyleSheet,
    Linking,
    TouchableNativeFeedback,
    ImageBackground} from 'react-native';
   
    import { Container, Header, Content, Item, Input } from 'native-base';
  


    import {CustomHeader} from '../index' 
    import { IMAGE } from '../image';
    import  GradientHeader from 'react-native-gradient-header';
    import LinearGradient from 'react-native-linear-gradient';
    import { Button} from 'react-native-paper';
    import {SocialIcon} from 'react-native-elements'
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
    import Lightbox from 'react-native-lightbox';
    import ImageView from 'react-native-image-view';
    import Gallery from 'react-native-image-gallery';
     console.disableYellowBox = true;
     import Modal from "react-native-modal";
     import call from 'react-native-phone-call';
     import * as Animatable from 'react-native-animatable';
     import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
     const adUnitId ='ca-app-pub-2370607102762462/5574969813';
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'
import FastImage from 'react-native-fast-image';

export class HomeScreenDetail extends Component {


  state = {
    isModalVisible: false,
    isModalVisible2: false
  };

  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  

  _toggleModal2 = () =>
  this.setState({ isModalVisible2: !this.state.isModalVisible2 });


  constructor(props){

    super(props);
    
    this.state={whcontact : ''};
    this.state = {
     
      msg: '',
    };
    
   
  }

 componentDidMount(){
   NetInfo.addEventListener(this.handleConnectivityChange);
    
  
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
 


  sendOnWhatsApp=() => {
    const {food}=this.props.route.params;
    let msg = this.state.msg;;
    let mobile = food.Contact2;
    if(mobile){
      if(msg){
        let url = 'whatsapp://send?text=' + this.state.msg + '&phone=91' + food.Contact2;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
      }else{
        alert('Please insert message to send');
      }
    }else{
      alert('Please insert mobile no');
    }
  }



  call = () => {
    const {food}=this.props.route.params;
    const args = {
      number: food.MobNo,
      prompt: false,
    };
    call(args).catch(console.error);
  };


  call1 = () => {
    const {food}=this.props.route.params;
    const args = {
      number: food.Contact1,
      prompt: false,
    };
    call(args).catch(console.error);
  };


  call2 = () => {
    const {food}=this.props.route.params;
    const args = {
      number: food.Contact2,
      prompt: false,
    };
    call(args).catch(console.error);
  };



 
    render() {

      const {food}=this.props.route.params;
     

      console.log(food)
      
     
        
     
        return (
            <View style={{ flex: 1,backgroundColor:'#000'}}>
              <CustomHeader title='Details' navigation={this.props.navigation} />
            
        {/*----------------------------Gallery Modal----------------------------------*/}   
                      <Modal s isVisible={this.state.isModalVisible} style={{margin:0}}>
                          <Gallery
                            style={{ flex: 1, backgroundColor: 'black' }}
                            images={[
                              { source:{uri:food.image1}},
                              
                              { source:{uri:food.image2}},
                            ]}>
                            </Gallery> 
                            <TouchableOpacity style={{alignItems:'center'}} onPress={this._toggleModal}>
                              <Button style={{backgroundColor:'#000',width:'100%',fontWeight:'bold',color:'#fff',alignContent:'center',borderRadius:0}}
                                labelStyle={{color:'#fff'}}>Back</Button>
                            </TouchableOpacity>
                      </Modal>
        {/*----------------------------XXXXX----------------------------------*/}   


         {/*----------------------------Contact Modal----------------------------------*/} 
       
         <Modal s isVisible={this.state.isModalVisible2} style={{margin:0}}>
                  <View style={{ flex:1, width:'100%',height:10,backgroundColor:'#fff',alignItems:'center'}}>
                              <Text style={{marginLeft: 5,marginTop:7,color:'#4BCFFA',fontSize:25,textAlign:'center',fontWeight:'bold'}} >Contact</Text> 
                              <Text style={{textAlign:'center'}}>--------------------------------------------------------------------------</Text>
                              <ScrollView showsVerticalScrollIndicator={false}>
                              <Image source={IMAGE.BANNER_4} style={{width:'100%',height:200,justifyContent:'center'}}></Image>
                    
                        
                     <View style={{flex:1,padding:8}}>
          {/*----------------------------WhatsApp Message----------------------------------*/}   
          <Item disabled style={{width:330}} >
            <Input 
            disabled 
            placeholderTextColor="#A4B0BD"
            placeholder={`+91 ${food.Contact2}`}
            style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}></Input>
          </Item>

           
          <Item>
                    <Input 
                     value={this.state.msg}
                     onChangeText={msg => this.setState({ msg })}
                    style={{color:'#777E8B',fontFamily:'Noto Sans Bold'}} 
                    multiline={true} numberOfLines={5} 
                    placeholder='Send Your First Message'
                    placeholderTextColor="#A4B0BD">
                      
                    </Input>
                   
                  </Item>

                  <TouchableOpacity onPress={this.sendOnWhatsApp}>
                  <Button  style={{backgroundColor:'#2ecc72',fontWeight:'bold'}} mode="contained">WhatsApp Now</Button>
                    </TouchableOpacity>

                    

          {/*----------------------------------Call----------------------------------*/} 
          <Text style={{textAlign:'center'}}>--------------------------------------------------------------------------</Text>

          <Text style={{textAlign:'center',padding:5,fontFamily:'Noto Sans Bold',fontSize:20}}>Phone Call</Text>
          <View style={{alignItems:'center'}}>
                        <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.MEDIUM_RECTANGLE}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />
          </View>
         
          <Text style={{textAlign:'center'}}>--------------------------------------------------------------------------</Text>

                  <TouchableOpacity onPress={this.call}>
                      <Button  
                      style={{backgroundColor:'#000',fontWeight:'bold',marginTop:5,borderRadius:0}} 
                      mode="contained">Contact : {food.MobNo} 
                      </Button>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.call1}>
                      <Button  
                      style={{backgroundColor:'#000',fontWeight:'bold',marginTop:20,borderRadius:0}} 
                      mode="contained">Contact : {food.Contact1} 
                      </Button>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.call2}>
                      <Button 
                      style={{backgroundColor:'#000',fontWeight:'bold',marginTop:20,borderRadius:0}} 
                      mode="contained">Contact : {food.Contact2} 
                      </Button>
                  </TouchableOpacity>

                   
         {/*-----------------------------------Email----------------------------------*/} 
       
         <Text style={{textAlign:'center'}}>--------------------------------------------------------------------------</Text>

            <Text style={{textAlign:'center',color:'red',padding:5,fontFamily:'Noto Sans Bold',fontSize:10}}>*Make Sure you can communicate with the profile holder in proper manner.</Text>

            <Text style={{textAlign:'center'}}>--------------------------------------------------------------------------</Text>

             
            
   
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


            <TouchableOpacity style={{alignItems:'center'}} onPress={this._toggleModal2}>
              <Button mode="contained"style={{backgroundColor:'#4BCFFA',width:'100%',fontWeight:'bold',color:'#fff',alignContent:'center',marginBottom:30}}>Back</Button>
            </TouchableOpacity>


            </ScrollView>
          </View>
   </Modal>



          {/*----------------------------Contact Modal----------------------------------*/}   









             <ScrollView contentContainerStyle={{alignItems:'center'}}>  
               <View style={{width:'100%',alignItems:'center'}}>
               
                <ImageBackground
                imageStyle={{width:'100%',borderBottomLeftRadius:40,borderBottomRightRadius:40}}
                    source={IMAGE.BANNER_6}
                    style={styles.block1}>
                      <View style={{alignItems:'center'}}>
                      <FastImage source=
                          {(food.profile_picture === null) ? IMAGE.ICON_PROFILE : { uri: food.profile_picture }} 
                          style={styles.profile} />
                          <Text style={styles.line}>______________________________</Text>
                          <Text style={styles.username}>{food.FullName}</Text>
                  <Text style={styles.age}>{food.email}</Text>
                  
                  <Text style={{color:'#fff',fontSize:20,fontFamily:'Noto Sans Bold'}}>Engage :<Text style={{color:'#45CE30',fontSize:20,fontFamily:'Noto Sans Bold'}}>{food.engage}</Text> </Text>        
                         
                        
                      </View>
                      
                </ImageBackground>
 
 
                <View style={styles.socialContainer}>

                  <Text style={styles.title}>Follow Now</Text>
                  <Text style={styles.line3}>______________________________</Text>

                     <View style={styles.social}>
                       <TouchableOpacity onPress={()=>(food.link_facebook ===null)? alert('No Url Provide') : Linking.openURL(food.link_facebook)} >
                       <SocialIcon style={styles.icons} type="facebook" />
                       </TouchableOpacity>
                    
                        <TouchableOpacity  onPress={()=>(food.link_instagram ===null)? alert('No Url Provide') : Linking.openURL(food.link_instagram)} >
                        <SocialIcon style={styles.icons} type="instagram"/>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>(food.link_twitter ===null)? alert('No Url Provide') : Linking.openURL(food.link_twitter)} >
                        <SocialIcon style={styles.icons} type="twitter"/>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>(food.link_linkdin ===null)? alert('No Url Provide') : Linking.openURL(food.link_linkdin)} >
                        <SocialIcon style={styles.icons} type='linkedin'/>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>(food.link_pinterest ===null)? alert('No Url Provide') : Linking.openURL(food.link_pinterest)} >
                        <SocialIcon style={styles.icons} type='pinterest'/>
                        </TouchableOpacity>
                     </View>
                </View>
                </View>

                <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />
             
             
                  <View style={styles.ViewContainer}>
                      <Text style={styles.title2}>Contacts</Text>
                      <Text style={styles.line3}>______________________________</Text>

                    <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
                        <Icon name="cellphone" color='#A4B0BD'size={22}/>
                        <Text style={styles.contact}>{`+91 ${food.MobNo}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
                    <Icon name="cellphone" color='#A4B0BD'size={22}/>
                      <Text style={styles.contact}>{`+91 ${food.Contact1}`}</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={{flexDirection:'row',marginLeft:5}}>
                    <Icon name="cellphone" color='#A4B0BD'size={22}/>
                      <Text style={styles.contact}>{`+91 ${food.Contact2} `} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._toggleModal2} >
                    <Button style={{backgroundColor:'#000',fontWeight:'bold',marginBottom:10}} mode="contained">Contact Now</Button>
                      </TouchableOpacity>

                  </View>



                  <View style={styles.ViewContainer}>
                  <Text style={styles.title2}>Other Details</Text>
                      <Text style={styles.line3}>______________________________</Text>

                      <Text style={styles.hedaing}>Credited For</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="face-profile" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{food.credit_for}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Country</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{food.country}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>State</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{food.states}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Current City</Text>
             <TouchableOpacity style={{flexDirection:'row'}}>
                <Icon name="map-marker" color='#A4B0BD'size={20}/>
                <Text style={styles.contact}>{food.City}</Text>
             </TouchableOpacity>

             <Text style={styles.hedaing}>Hometown Address</Text>
             <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.contact}>{food.Address}</Text>
             </TouchableOpacity>



                  </View>
                 

                  <View style={styles.ViewContainer}>
                  <Text style={styles.title2}>Social Details</Text>
                      <Text style={styles.line3}>______________________________</Text>



                      <Text style={styles.hedaing}>Marital Status</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="nature-people" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.marital_status} </Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Mother Tongue</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="translate" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.mother_tongue}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Zodiac Sign</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="alpha-z-box-outline" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.zodiac_sign}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Religion-Caste</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="hinduism" color='#A4B0BD'size={20}/>
                    <Text style={styles.contact}>{food.religion_caste}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Mamkul</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="map-marker" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.Mamkul}</Text>
                        </TouchableOpacity>




                  </View>

                  

                  <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />

                  <View style={styles.ViewContainer}>
                  <Text style={styles.title2}>Health Details</Text>
                      <Text style={styles.line3}>______________________________</Text>



                      <Text style={styles.hedaing}>Height</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="gender-male-female" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.Height}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Blood Group</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="blood-bag" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.blood_group}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Gender</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="gender-male-female" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.checked}</Text>
                        </TouchableOpacity>




                  </View>

                 

                  <View style={styles.ViewContainer}>
                  <Text style={styles.title2}>Career Details</Text>
                      <Text style={styles.line3}>______________________________</Text>



                      <Text style={styles.hedaing}>Highest Qualification</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="alpha-q-box-outline" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.HighEdu}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Employeed In</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="alpha-q-box-outline" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.employee_in}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Occupation</Text>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name="transit-transfer" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.Ocuupation}</Text>
                        </TouchableOpacity>


                        <Text style={styles.hedaing}>Anual Income</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="cash-100" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.anual_income}</Text>
                        </TouchableOpacity>




                  </View>

                  <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.MEDIUM_RECTANGLE}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />

                  <View style={styles.ViewContainer}>
                  <Text style={styles.title2}>Birth Details</Text>
                      <Text style={styles.line3}>______________________________</Text>



                      <Text style={styles.hedaing}>Date of Birth</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="cake" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.date}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Birth Time</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="av-timer" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.BirthTime}</Text>
                        </TouchableOpacity>

                        <Text style={styles.hedaing}>Birth Place</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="map-marker" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.BirthPlace}</Text>
                        </TouchableOpacity>


                        <Text style={styles.hedaing}>Age</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}>
                            <Icon name="face-profile" color='#A4B0BD'size={20}/>
                            <Text style={styles.contact}>{food.Age}</Text>
                        </TouchableOpacity>


                      

                  </View>


                 
                  <View style={styles.ViewContainer}>
                       <Text style={styles.title2}>Gallery</Text>
                      
                      <BannerAd
                          unitId={adUnitId}
                          size={BannerAdSize.LARGE_BANNER}
                          requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                          }}
                        />
                      <Text style={{ textAlign:'center',color:'#7B8788'}}>_________________________________________</Text>
                      
                      <Text style={{padding:10,color:'red'}} onPress={this._toggleModal}>Click On Image</Text>

                  

                    <TouchableOpacity onPress={this._toggleModal} >
                     <FastImage 
                     resizeMode={FastImage.resizeMode.contain}
                     source={(food.profile_picture === null) ? IMAGE.ICON_PROFILE : { uri: food.profile_picture }}
                     style={{width:300,height:200,marginBottom:20}}>

                     </FastImage>
                     </TouchableOpacity>           

                      
                       </View>
                       


                      

                      
                     
                
                 <Text style={{color:'#fff', padding:15,textAlign:'center',fontSize:10}}>Copyright © 2020 VPSCORELIM | Powered by VPS CORE LIM</Text>
              </ScrollView>

               <DropdownAlert closeInterval={3000} ref={ref => this.dropDownAlertRef = ref} />
            </View>
          );
    }
}
const styles = StyleSheet.create({
  block1:{
   
    width:'100%',
    height:300
  },


  profile:{
          borderWidth:5,
          borderColor:'#fff',
          alignItems:'center',
          width:120,
          height:120,
          marginTop:70,
          borderRadius:120/2
  },

  username:{
          padding:5,
          textAlign:'center',
          color:'#fff',
          fontSize:18,
          fontFamily:'Noto Sans Bold'
  },

  age:{

    padding:5,
          textAlign:'center',
          color:'#fff',
          fontSize:15,
          fontFamily:'Noto Sans Bold'
    },

  line:{
          color:'#fff'
   },

   line3:{
          textAlign:'center',
          color:'#7B8788'
   },

   line2:{
          color:'#A4B0BD'
   },

   social:{
          flex:1,
          justifyContent:'center',
          flexDirection:'row',
   },

   icons:{
          width:35,
          height:35,
   },

   socialContainer:{
          borderRadius:20,
          width:330,
          height:150,
          marginTop:20,
          marginBottom:20,
          backgroundColor:'#fff',
          flex:1,
          justifyContent:'center',
   },

   ViewContainer:{
          borderRadius:20,
          width:330,
          marginTop:20,
          backgroundColor:'#fff',
          flex:1,
          marginBottom:20,
          alignItems:'center',
          justifyContent:'center'
   },

   title:{
          textAlign:'center',
          fontFamily:'Noto Sans Bold',
          fontSize:20,
          color:'#4BCFFA',
          marginTop:20
   },

   title2:{
          textAlign:'center',
          fontFamily:'Noto Sans Bold',
          fontSize:20,
          color:'#4BCFFA',
          marginTop:20
   },

   contact:{
          fontSize:15,
          padding:5,
          color:'#2C3335',
          textAlign:'center',
          fontFamily:'Noto Sans Bold'
  },

  hedaing:{
          fontSize:13,
          padding:2,
          color:'#A4B0BD',
          textAlign:'center',
          fontFamily:'Noto Sans'
  },

  image1:{
          borderRadius:20,
          flex:1,
          width:200,
          height:300
  },

  imgcontainer:{
          borderRadius:20,
          flexDirection:'row', 
          justifyContent:'center',
          width:300,
          height:300
  },

  contain: {
          flex: 1,
          height: 150,
  },

  container: {
          flex: 1,
          width: null,
          height: null,
  },

  imageContainer: {
          flex: 1,
          width: null,
          height: null,
  },

  overlay: {
    borderRadius:20,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  }
})