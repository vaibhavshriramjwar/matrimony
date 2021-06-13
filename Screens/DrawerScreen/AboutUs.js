import React, { Component } from 'react'
import { Text, View,StatusBar,Image,ScrollView,StyleSheet,TouchableOpacity, Linking,  } from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMAGE } from '../image';
import * as Animatable from 'react-native-animatable';
import {SocialIcon} from 'react-native-elements'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import DropdownAlert from 'react-native-dropdownalert'
const NetInfo = require('@react-native-community/netinfo');
import FastImage from 'react-native-fast-image'




export class AboutUs extends Component {

 
   
    constructor(props){
        super(props);
        //Images
        this.state={

          connection_Status : ""
    
        }
        this.state={images_1:''};
        this.state={images_2:''};
        this.state={images_3:''};
        this.state={images_4:''};
        this.state={images_5:''};

        //VPS URLS
        this.state={facebook_url:''};
        this.state={instagram_url:''};
        this.state={linkdin_url:''};
        this.state={youtube_url:''};

        //Anubandha URLS
        this.state={anu_facebook_url:''};
        this.state={anu_instagram_url:''};
        this.state={anu_linkdin_url:''};
        this.state={anu_youtube_url:''};


        //App version urls
        this.state={label:''};
        this.state={update:''};
        this.state={version:''};
    }

   

   componentDidMount(){
     NetInfo.addEventListener(this.handleConnectivityChange);
   this.loadData()
   }
   
   componentWillUnmount(){
    NetInfo.addEventListener(this.handleConnectivityChange);

   }

   handleConnectivityChange = state => {
       if(state.isConnected){
            
       }else{
            this.dropDownAlertRef.alert('error', 'Error', error.message);
       }
   }






      loadData=()=>{
          firebase.firestore().collection('App_Url').doc('images').onSnapshot((doc)=>{
              if(doc.exists){
                    //Images
                    const {images_1}=doc.data();
                    const {images_2}=doc.data();
                    const {images_3}=doc.data();
                    const {images_4}=doc.data();
                    const {images_5}=doc.data();

                    //VPS URLS
                    const {facebook_url}=doc.data();
                    const {instagram_url}=doc.data();
                    const {linkdin_url}=doc.data();
                    const {youtube_url}=doc.data();
                    

                    //Anubandha urls
                    const {anu_facebook_url}=doc.data();
                    const {anu_instagram_url}=doc.data();
                    const {anu_linkdin_url}=doc.data();
                    const {anu_youtube_url}=doc.data();

                    //app version
                    const {label}=doc.data();
                    const {update}=doc.data();
                    const {version}=doc.data();

                     //General Info
                    this.setState({images_1:images_1});
                    this.setState({images_2:images_2});
                    this.setState({images_3:images_3});
                    this.setState({images_4:images_4});
                    this.setState({images_5:images_5});

                    this.setState({facebook_url:facebook_url});
                    this.setState({instagram_url:instagram_url});
                    this.setState({linkdin_url:linkdin_url});
                    this.setState({youtube_url:youtube_url});

                    this.setState({anu_facebook_url:anu_facebook_url});
                    this.setState({anu_instagram_url:anu_instagram_url});
                    this.setState({anu_linkdin_url:anu_linkdin_url});
                    this.setState({anu_youtube_url:anu_youtube_url});

                    this.setState({label:label});
                    this.setState({update:update});
                    this.setState({version:version});
                   

              }else{

                   alert('Data not Load')
              }
          })
      }


    render() {
        return (
           <View style={{flex:1, backgroundColor:'#fff'}}>
           
               <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
                
             <ScrollView contentContainerStyle={{alignItems:'center'}}showsVerticalScrollIndicator={false}>
              <FastImage
                    style={{width:'100%',height:200}}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.images_1 === null) ? IMAGE.BANNER_7 : { uri: this.state.images_1} }
                  />
             

               <Animatable.Image animation="fadeInDown"duraton="1900" source={IMAGE.VPS_LOGO} style={{width:'60%',height:70,justifyContent:'center',marginTop:50}}></Animatable.Image>
               <Text style={{textAlign:'center',color:'#7B8788'}}>_________________</Text>

               <Text style={styles.title}>WHY VPS CORE LIM</Text>
               <Text style={styles.details}>VPS CORE LIM is trying to do best in information technology in each segment and among the top in web development segments.</Text>
               <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

               <Text style={styles.title}>Our Values</Text>
        <Text style={styles.details}>We are commited to serv our customer and make their goals as our top prority {'\n'}
         Technology Based Innovation{'\n'}Respect ,Integrity & tranceparancy{'\n'} Deploying the Business</Text>
               <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

               <Text style={styles.title}>Our Philosophy</Text>
               <Text style={styles.details}>Guided by relentless focus on our three imperatives of Quality,Times and resources,We constantly strive to deliver technology solution to our customer</Text>
               <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

               <Text style={styles.title}>About Us</Text>
               <Text style={styles.details}>VPS CORE LIM is Amravati based IT Company,established in 2016,is one of its kinds which develops different types of software,products and provide IT based service.</Text>
               <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

               <Text style={styles.title}>Our Services</Text>
               <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

              <ScrollView horizontal contentContainerStyle={{marginBottom:20}}showsHorizontalScrollIndicator={false}>

              <FastImage
                    style={{width:320,height:200,padding:10}}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.images_2 === null) ? IMAGE.BANNER_7 : { uri: this.state.images_2} }
                  />
              <FastImage
                    style={{width:320,height:200,padding:10}}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.images_3 === null) ? IMAGE.BANNER_7 : { uri: this.state.images_3} }
                  />
              <FastImage
                    style={{width:320,height:200,padding:10}}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.images_3 === null) ? IMAGE.BANNER_7 : { uri: this.state.images_3} }
                  />
              <FastImage
                    style={{width:320,height:200,padding:10}}
                    resizeMode={FastImage.resizeMode.contain}
                    source={(this.state.images_4 === null) ? IMAGE.BANNER_7 : { uri: this.state.images_4} }
                  />
              </ScrollView>
               

              <Text style={{textAlign:'center',color:'#8667EB'}}>________________________</Text>

              <Text style={styles.title}>For More Information</Text>
              <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Visit </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >www.vpscorelim.xyz </Text>

                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Call </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >+91 7350257828 </Text>  

                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> E-mail </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >contact@vpscorelim.xyz </Text>  
                        
                        <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Follow Us On </Text>
                       
                        <View style={styles.social}>

                       <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.facebook_url) }>
                       <SocialIcon style={styles.icons} type="facebook" />
                       </TouchableOpacity>
                    
                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.instagram_url) }>
                        <SocialIcon style={styles.icons} type="instagram"/>
                        </TouchableOpacity>

                       
                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.linkdin_url) }>
                        <SocialIcon style={styles.icons} type='linkedin'/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.youtube_url) }> 
                        <SocialIcon style={styles.icons} type='youtube'/>
                        </TouchableOpacity>

                       
                     </View>
                        <Text style={{textAlign:'center'}}>------------------------------------------------------------------</Text>
         
              
               </ScrollView>

               
               <DropdownAlert closeInterval={10000} ref={ref => this.dropDownAlertRef = ref} />
           </View>
                
           
        )
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:18,
        marginTop:2,
        padding:2,
        color:'#4BCFFA',
        fontFamily:'Noto Sans Bold'
    },
    Abouttitle:{
        fontSize:20,
        marginTop:2,
        padding:2,
        color:'#4BCFFA',
        fontFamily:'Noto Sans Bold'
    },
    details:{
        fontSize:15,
        marginTop:2,
        padding:5,
        textAlign:'center',
        color:'#A4B0BD',
        fontFamily:'Noto Sans'
    },
    social:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        marginBottom:20
 },
 icons:{
    width:40,
    height:40,
},
})