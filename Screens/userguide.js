import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    BackHandler,
    ImageBackground


} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export default class userguide extends Component {
    render() {
        return (
           <View style={{flex:1,alignItems:'center'}}>







            <Animatable.View animation="fadeInDown" duraton="1900">

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login_Screen')}>
                    <LinearGradient colors={['#000', '#000']} style={styles.signIn}>
                            <Text style={styles.textSign}>Continue to Login</Text>
                    </LinearGradient>
            </TouchableOpacity>

            </Animatable.View>

           </View>
        )
    }
}
const styles = StyleSheet.create({
    
    title:{
        color:'#E5B143',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    signIn: {
        width: 300,
        height: 50,
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    },
    lottie: {
        width: 100,
        height: 100
      },
      container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    welcomeText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
    exampleText: {
        fontSize: 20,
        marginBottom: 25,
        textAlign: "center",
    },
    instructionsText: {
        color: "#333333",
        fontSize: 16,
        marginBottom: 40,
        textAlign: "center",
    },
})