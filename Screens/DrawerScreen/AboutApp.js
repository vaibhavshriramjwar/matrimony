import React, { Component } from 'react'
import { Text, View ,SafeAreaView,ImageBackground,Image,StyleSheet,TouchableOpacity,StatusBar,Linking} from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'  
import { IMAGE } from '../image';
import { ScrollView } from 'react-native-gesture-handler';
import {SocialIcon} from 'react-native-elements'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'

export class AboutApp extends Component {




    constructor(props){
        super(props);
        //Images
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

    componentDidMount() {
        this.loadData();
      }

      loadData=()=>{
          firebase.firestore().collection('App_Url').doc('images').onSnapshot((doc)=>{
              if(doc.exists){
                    //Anubandha urls
                    const {anu_facebook_url}=doc.data();
                    const {anu_instagram_url}=doc.data();
                    const {anu_linkdin_url}=doc.data();
                    const {anu_youtube_url}=doc.data();

                    this.setState({anu_facebook_url:anu_facebook_url});
                    this.setState({anu_instagram_url:anu_instagram_url});
                    this.setState({anu_linkdin_url:anu_linkdin_url});
                    this.setState({anu_youtube_url:anu_youtube_url});


              }else{

                   alert('Data not Load')
              }
          })
      }








    render() {
        return (
            <ImageBackground source={IMAGE.IMAGE_1} style={{ flex: 1}}>
                <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
            <CustomHeader title="About App" navigation={this.props.navigation} />
            <View style={{flex:1,alignItems:'center',marginTop:120,marginBottom:20}}>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <Image source={IMAGE.APP_LOGO} style={{width:200,height:200}}></Image>
            
            <Text style={{color:'#fff'
            ,textAlign:'center',
            fontFamily:'Noto Sans Bold',
            padding:20}}>This app is developed for the sonar panchal community.For finding the best partner for you.on one platform</Text>

                <Text style={{textAlign:'center',color:'#fff'}}>-----------------------------------</Text>
                <Text style={{color:'#fff'}}>For More Information</Text>
              <Text style={{textAlign:'center',color:'#fff'}}>------------------------------------------------------------------</Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Visit </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >www.vpscorelim.xyz </Text>

                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Call </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >+91 9834673131 </Text>  

                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> E-mail </Text>
                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:15,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >anubandha20@gmail.com</Text>  
                        
                        <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:10,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Follow Us On </Text>
                       
                        <View style={styles.social}>
                       <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.anu_facebook_url) }>
                       <SocialIcon style={styles.icons} type="facebook" />
                       </TouchableOpacity>
                    
                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.anu_instagram_url) }>
                        <SocialIcon style={styles.icons} type="instagram"/>
                        </TouchableOpacity>

                       

                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.anu_linkdin_url) }>
                        <SocialIcon style={styles.icons} type='linkedin'/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ ()=> Linking.openURL(this.state.anu_youtube_url) }>
                        <SocialIcon style={styles.icons} type='youtube'/>
                        </TouchableOpacity>

                       
                     </View>
                <Text style={{textAlign:'center',color:'#fff'}}>------------------------------------------------------------------</Text>
          <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:15,textAlign:'center',fontWeight:'bold'}} onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') }> Copyright@anubandha </Text>
          <Text style={{marginLeft: 5,marginTop:7,color:'#fff',fontSize:10,textAlign:'center'}}onPress={ ()=> Linking.openURL('https://www.vpscorelim.xyz') } >www.vpscorelim.xyz </Text>  
          <Text style={{textAlign:'center',color:'#fff'}}>------------------------------------------------------------------</Text>
          </ScrollView>
            </View>
          </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
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