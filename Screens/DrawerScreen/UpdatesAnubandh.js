import React, { Component } from 'react'
import { Text, View,SafeAreaView,StatusBar,Image,TouchableOpacity, Linking, } from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'  
import { IMAGE } from '../image';
import { Button} from 'react-native-paper';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'

export class UpdatesAnubandh extends Component {


  constructor(props){
    super(props);
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
                //Imag
                //app version
                const {label}=doc.data();
                const {update}=doc.data();
                const {version}=doc.data();


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
            <View style={{ flex: 1}}>
              <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
            <CustomHeader title="Update Anubandha" navigation={this.props.navigation} />
            <View style={{flex:1,alignItems:'center'}}>
            <Image style={{width:200,height:200}} source={IMAGE.APP_LOGO}></Image>
            <Text style={{textAlign:'center',color:'#7B8788'}}>___________________________</Text>

            <Text style={{fontSize:15,marginTop:2,padding:2,fontFamily:'Noto Sans Bold'}}>Version</Text>
        <Text style={{fontSize:18,marginTop:2,padding:2,color:'#4BCFFA',fontFamily:'Noto Sans Bold'}}>{this.state.version}</Text>
            <Text style={{textAlign:'center',color:'#7B8788'}}>___________________________</Text>
            <Text style={{fontSize:20,marginTop:2,padding:2,color:'red',fontFamily:'Noto Sans Bold'}}>{this.state.label}</Text>    

            <TouchableOpacity style={{alignItems:'center'}}  onPress={ ()=> Linking.openURL('https://play.google.com/store/apps/details?id=com.anubandha&hl=en_IN') }>
              <Button mode="contained"style={{backgroundColor:'#000',marginTop:20,fontWeight:'bold',color:'#fff',alignContent:'center',marginBottom:30}}>Update App</Button>
            </TouchableOpacity>

            </View>
          </View>
        )
    }
}
