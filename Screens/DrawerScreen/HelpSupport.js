import React, { Component } from 'react'
import { Text, View,SafeAreaView,ScrollView,TouchableOpacity,StatusBar } from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'  
import { Button} from 'react-native-paper';

export class HelpSupport extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
              <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>
            <CustomHeader title="Help & Support  Screen" navigation={this.props.navigation} />
            <View style={{flex:1,alignItems:'center'}}>
         
            {/*-----------------Terms & Condition Modal-----------------------*/}  
      
          <View style={{ flex:1, width:'100%',height:10,backgroundColor:'#fff'}}>
          <Text style={{marginLeft: 5,marginTop:7,color:'#4C4B4B',fontSize:25,textAlign:'center',fontWeight:'bold'}} >Help & Support </Text> 
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
           
            </ScrollView>
          </View>
      
 {/*-----------------Terms & Condition Modal-----------------------*/} 
                 
            </View>
          </View>
        )
    }
}
