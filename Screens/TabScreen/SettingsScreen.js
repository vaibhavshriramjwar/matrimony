import React, { Component } from 'react';
import { Text, 
    View ,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    StyleSheet,
    FlatList,
    Button} from 'react-native';

import {CustomHeader} from '../index'  
import { IMAGE } from '../image';
import { Searchbar } from 'react-native-paper';
import {getFoods} from './userApi';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedLoader from "react-native-animated-loader";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import FastImage from 'react-native-fast-image'
const NetInfo = require('@react-native-community/netinfo');
import DropdownAlert from 'react-native-dropdownalert'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
const adUnitId ='ca-app-pub-2370607102762462/5574969813';

export class SettingsScreen extends Component {

 
   constructor(props){
     super(props);
     this.state={uid :''};
     this.state={uid2 :''};
     //Images Urls
     this.state={account:'this is your account'};
     this.state={accountnot:'this is your account'};
    
     this.state = {
      loading: false,      
      data: [],      
      error: null,    
    };
   }




  onFoodsReceived = (foodList) => {
  this._interval = setInterval(()=>{
    this.setState(prevState => ({
      foodList: prevState.foodList = foodList
    }));
  },15000)
   
  }

  componentDidMount() {
     NetInfo.addEventListener(this.handleConnectivityChange);
  
     
      this.loadData();
        getFoods(this.onFoodsReceived);
     
      
  }


  loadData = () =>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
         const email =user.email;
         const uid =user.uid;
          firebase.firestore().collection('users').doc(uid).onSnapshot((doc)=>{
          if(doc.exists){
          const {uid}=doc.data();
          this.setState({uid2:uid});
          this.setState({isModalVisible:true})
          firebase.auth().onAuthStateChanged((user)=>{
            if(user){ 
            const uid =user.uid;
            if(this.state.uid2==null){
              firebase.firestore().collection('users').doc(uid).update({
                'uid':uid
              })
            }
            else{}}else{}})}
          });
        }
      })
  }













  componentWillUnmount() {
     NetInfo.addEventListener(this.handleConnectivityChange);
    clearInterval(this._interval);
  }

  handleConnectivityChange = state => {
        if(state.isConnected){
              
        }else{
           this.dropDownAlertRef.alert('error', 'No Internet Connection', 'On Your Internet Connection');
        }
    }

  ListEmpty =()=>{
    
    return(
      <View>
         <Text style={{padding:10,color:'red',textAlign:'center',fontSize:20}}>Wait for Some time data being load....</Text>
         <View style={{alignItems:'center'}}>
         <BannerAd
             unitId={adUnitId}
              size={BannerAdSize.MEDIUM_RECTANGLE}
               requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                  }}
          />
         </View>
        
        
      </View>
     
    )
  }


  state = {
    searchQuery: '',
    foodList: [],
    selectedIndex: 0
  };

  searchFilterFunction = text => {
    if(this.state.foodList == null){
      
    
    console.log('Data Not Load')
  

    }else{
       const newData = this.state.foodList.filter(item => {      
        const itemData = `${item.FullName.toUpperCase()}   
        ${item.FullName.toUpperCase()} ${item.FullName.toUpperCase()}`; 
           
         const textData = text.toUpperCase();
          
         return itemData.indexOf(textData) > -1;    
      });   this.setState({visible:false});
         this.setState({ foodList: newData }); 

    }
   
  }
    render() {
      const { searchQuery } = this.state;
      const { visible } = this.state;
        return (
            <View style={{ flex: 1,alignItems:'center'}}>
              <CustomHeader title="Search User" isHome={true} navigation={this.props.navigation}/>
              < AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={IMAGE.LOADING_5}
                            animationStyle={styles.lottie}
                            speed={1}>
                              
                            </AnimatedLoader>
              <Searchbar
                style={{borderRadius:20}}
                placeholder="Search By Name"
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false} 
                />



<ScrollView showsVerticalScrollIndicator={false} >
<FlatList contentContainerStyle={{padding:10,alignItems:'center',marginTop:10}}
          data={this.state.foodList}
          
          ListEmptyComponent={this.ListEmpty}
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
          <Text style={{padding:15,textAlign:'center',fontSize:10}}>Copyright © 2020 VPSCORELIM | Powered by VPS CORE LIM</Text>
</ScrollView>
<DropdownAlert closeInterval={3000} ref={ref => this.dropDownAlertRef = ref} />
            </View>
          );
    }
}
const styles = StyleSheet.create({
  viewContainer:{
    borderRadius:20,
    alignItems:'center',
    backgroundColor:'#fff',
    padding:10,
    marginTop:25,
    width:300,
    height:350
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
lottie: {
  width: 200,
  height: 200
},

})