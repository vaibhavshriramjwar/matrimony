import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import {CustomHeader,CustomDrawerContent} from '../index'  

export class Feeds extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
            <CustomHeader title="Feeds" navigation={this.props.navigation} />
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Feeds Screen!</Text>
                 
            </View>
          </View>
        )
    }
}
