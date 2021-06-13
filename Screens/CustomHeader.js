import React, { Component } from 'react';
import { Text, 
    View ,
    
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Button} from 'react-native';

    import {IMAGE} from './image'

export class CustomHeader extends Component {
    render() {
      let {navigation,isHome,title,backcolor} = this.props
        return(
            <View style={{flexDirection:'row',height:50,backgroundColor:'#8667EB'}}>
                 
                    <View style={{flex:1,justifyContent:'center'}}>
                    {
                      isHome?
                      <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <Image 
                            style={{width:30,height:30,marginLeft:5}} 
                            source={require('../images/dra_menu1.png')} 
                            resizeMode='contain' />
                      </TouchableOpacity>
                    :
        
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>navigation.goBack()}>
                          <Image style={{width:20,height:20,marginLeft:5}}
                            source={IMAGE.ICON_BACK}
                            resizeMode='contain'></Image>
                          <Text style={{color:'#fff'}}>Back</Text>
                      </TouchableOpacity>
                    }
                    
        
                  </View>
                  
                 
                  
        
              
               <View style={{flex:1.5,justifyContent:'center'}}>
                   <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>{title}</Text>
               </View>
               <View style={{flex:1}}></View>
        
            </View>
          )
    }
}
