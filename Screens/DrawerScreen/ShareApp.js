import React, { Component } from 'react'
import { Text, View,SafeAreaView,ImageBackground,Platform,Share,StatusBar } from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'  
import { IMAGE } from '../image';
import { Button} from 'react-native-paper';

export class ShareApp extends Component {
    constructor()
    {
        super();
 
        this.state = 
          { 
 
            TextInputValueHolder: 'tytytytyty'
 
          }
    }
 
    ShareMessage=()=>
    {
            Share.share(
            {
                
              message: "अनुबंध \n|| नवी बंधने नवी नाती || \nआपल्या सोनार पांचाळ समाजा करिता \nवधू वर परिचया करिता \nएकमेव हक्काचं Android App \nआजच डाऊनलोड करा \nhttps://play.google.com/store/apps/details?id=com.anubandha&hl=en_IN"
            
            }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
    }
    render() {
        return (
            <ImageBackground source={IMAGE.SHARE_BG} style={{ flex: 1}}>
              <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
            <CustomHeader title="Share Now" navigation={this.props.navigation} />
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          
              <Button mode="contained"style={{backgroundColor:'#8667EB'
              ,width:'80%'
              ,height:50
              ,marginTop:350
              ,fontWeight:'bold'
              ,alignContent:'center',
              borderRadius:40,
              marginBottom:30}}
              labelStyle={{marginTop:15}}
              onPress={ this.ShareMessage }
              >Share Now</Button>
       
             
                 
            </View>
          </ImageBackground>
        )
    }
}
