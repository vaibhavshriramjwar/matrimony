import React, { Component,useState } from 'react';
import {SafeAreaView,
          View,TouchableOpacity,
          StyleSheet,
          ImageBackground,
          StatusBar,
          container,
          Text,
          ScrollView,
          Dimensions,
          Image,
          Linking, 
          Alert,
          } from 'react-native';

import { Container, 
          Header, 
          Content,
          Item, 
          Input, 
          Label,
          Right, 
          Body, 
          Left, 
          Picker, 
          Form,
          Textarea } from 'native-base';
import {SocialIcon} from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import '@react-native-firebase/auth';

import DatePicker from 'react-native-datepicker'
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import {CustomHeader} from '../index' 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var bg =require('./TabImages/bg2.jpg');
import { Button} from 'react-native-paper';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'
import AnimatedLoader from "react-native-animated-loader";
import { RadioButton } from 'react-native-paper';

import { IMAGE } from '../image';

export class ImageUpload extends Component {
  state = {
    checked: 'first',
  };

  state = {
    checkede: 'agree',
  };

  selectDate =(date) =>{
    this.setState({date:date});
  }

  state={marital_status:''}
  updatemarry =(marital_status)=>{
    this.setState({marital_status : marital_status})
  }
  state={mother_tongue:''}
  updatemt =(mother_tongue)=>{
    this.setState({mother_tongue : mother_tongue})
  }
  state={zodiac_sign:''}
  updatezs =(zodiac_sign)=>{
    this.setState({zodiac_sign : zodiac_sign})
  }
  state={blood_group :''}
  updatebg =(blood_group )=>{
     this.setState({blood_group  : blood_group })
  }
  state={employee_in :''}
  updateei =(employee_in )=>{
    this.setState({employee_in : employee_in })
  }
  state={anual_income  :''}
  updateai =(anual_income  )=>{
    this.setState({anual_income   : anual_income  })
  }

  state={Height:''}
  Height =(Height)=>{
    this.setState({Height:Height})
  }





  constructor(props){
    super(props);
    this.state = { visible: false };
    //Current Enter data in Text Box
     this.state={NewFullName:''};
     this.state={NewMobNo:''};
     this.state={NewContact2:''};
     this.state={NewContact3:''};
     this.state={NewMamkul:''};
     this.state={NewHighEdu:''};
     this.state={NewOccupation:''};
     this.state={NewAge:''};
     this.state={NewAddress:''};

     this.state={NewBirthPlace :''};
     this.state={NewBirthTime:''};
    //End



    //Fetch Details
     this.state={uid :''};
      this.state={FullName :''};
      this.state={email:''};
      this.state={MobNo : ''};
      this.state={Contact1 : ''};
      this.state={Contact2 : ''};
      this.state={Address :''};
      this.state={Mamkul :''};
      this.state={HighEdu :''};
      this.state={Ocuupation :''};
      this.state={Age :''};
      this.state={BirthPlace:''};
      this.state={BirthTime:''};
      this.state={date:''};


      this.state={dfacebook : ''};
      this.state={dinstagram :''};
      this.state={dtwitter :''};
      this.state={dlinkedin :''};
      this.state={dpinterest :''};

      //urls
      this.state={facebook : ''};
      this.state={instagram :''};
      this.state={twitter :''};
      this.state={linkedin :''};
      this.state={pinterest :''};
   
  }
  componentDidMount() {
    this.loadData();
  }


  validateMobNo =(MobNo,Contact1,Contact2)=>{
    var Mob =  /^[7-9][0-9]{9}$/
    return Mob.test(MobNo,Contact1,Contact2)
  
  }
  
  validateFullName=(FullName)=>{
    var Fn =/^[a-zA-Z] [a-zA-Z]+[a-zA-Z]$/
    return Fn.test(FullName)
  }



  loadData = () =>{
    
      firebase.auth().onAuthStateChanged((user)=>{
         if(user){
          this.setState({visible:true});
            const email =user.email;
            const uid =user.uid;
            

             firebase.firestore().collection('users').doc(uid).get().then((doc)=>{
                if(doc.exists){
             //General Info
             const {FullName}=doc.data();
             //Contact Numbers
             const {MobNo}=doc.data();
             const {Contact1}=doc.data();
             const {Contact2}=doc.data();
             const {Address}=doc.data();
             const {Mamkul}=doc.data();
             const {HighEdu}=doc.data();
             const {Ocuupation}=doc.data();
             const {Age}=doc.data();
             const {BirthPlace}=doc.data();
             const {BirthTime}=doc.data();
             const {link_facebook} =doc.data();
             const {link_instagram} =doc.data();
             const {link_twitter} =doc.data();
             const {link_linkdin} =doc.data();
             const {link_pinterest} =doc.data();
            
            this.setState({FullName:FullName});
            this.setState({email:email});
            this.setState({uid:uid});
            this.setState({MobNo:MobNo});
            this.setState({Contact1:Contact1});
            this.setState({Contact2:Contact2});
            this.setState({Address:Address});
            this.setState({Mamkul:Mamkul});
            this.setState({HighEdu:HighEdu});
            this.setState({Ocuupation:Ocuupation});
            this.setState({Age:Age});
            this.setState({BirthPlace:BirthPlace});
            this.setState({BirthTime:BirthTime});
            this.setState({dfacebook:link_facebook});
            this.setState({dinstagram:link_instagram});
            this.setState({dtwitter:link_twitter});
            this.setState({dlinkedin:link_linkdin});
            this.setState({dpinterest:link_pinterest});
            
                }
             })
             this.setState({visible:false});
         }else{
            alert('Your Data Not Load Succesful')
         }
      })
    }


    update =()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const NewFullName = this.state.NewFullName
        if(NewFullName==null){
          firebase.firestore().collection('users').doc(uid).update({
            'FullName':this.state.FullName

          })
        alert("1")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'FullName':this.state.NewFullName
          })
          alert("2")
        }
          
      }else{
        alert('Something Goes Wrong')
      }
    })
              

    }




    updateFullName =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const NewFullName = this.state.NewFullName
        if(NewFullName==null){
          firebase.firestore().collection('users').doc(uid).update({
            'FullName':this.state.FullName

          })
        alert("Full Name Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'FullName':this.state.NewFullName
          })
          alert("New FullName Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      
    }




    updateMobNo=()=>{
      
      if(!this.validateMobNo(this.state.MobNo)){
         alert('Check Your Mobile Number Properly');

      }else{
        this.setState({visible:true});
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){ 
          const email =user.email;
          const uid =user.uid;
          const MobNo = this.state.MobNo
          const NewMobNo = this.state.NewMobNo
          if(NewMobNo==null){
            firebase.firestore().collection('users').doc(uid).update({
              'MobNo':this.state.MobNo
  
            })
          alert("Contact Number Updated")}
          else{
            firebase.firestore().collection('users').doc(uid).update({
              'MobNo':this.state.NewMobNo
            })
            alert("New Contact Number Updated")
          }
          this.setState({visible:false});
        }else{
  
        }
      })

      }
    }



    updateContact2=()=>{
      if (!this.validateMobNo(this.state.Contact1)) {
        alert('Check Your Mobile Number Properly');
        
      }else{
        this.setState({visible:true});
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){ 
          const email =user.email;
          const uid =user.uid;
          const Contact1 = this.state.Contact1
          const NewContact2 = this.state.NewContact2
          if(NewContact2==null){
            firebase.firestore().collection('users').doc(uid).update({
              'Contact1':this.state.Contact1
  
            })
          alert("Contact Number Updated")}
          else{
            firebase.firestore().collection('users').doc(uid).update({
              'Contact1':this.state.NewContact2
            })
            alert("New Contact Number Updated")
          }
          this.setState({visible:false});
        }else{
          alert('Something Goes Wrong')
        }
      })



      }
    }



    updateContact3=()=>{
      if (!this.validateMobNo(this.state.Contact2)) {
        alert('Check Your Mobile Number Properly');
        
      }else{
        this.setState({visible:true});
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){ 
          const email =user.email;
          const uid =user.uid;
          const Contact2 = this.state.Contact2
          const NewContact3 = this.state.NewContact3
          if(NewContact3==null){
            firebase.firestore().collection('users').doc(uid).update({
              'Contact2':this.state.Contact2
  
            })
          alert("Contact Number Updated")}
          else{
            firebase.firestore().collection('users').doc(uid).update({
              'Contact2':this.state.NewContact3
            })
            alert("New Contact Number Updated")
          }
          this.setState({visible:false});
        }else{
          alert('Something Goes Wrong')
        }
      })
        
      }
    }


    updateMamkul=()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const Mamkul = this.state.Mamkul
        const NewMamkul = this.state.NewMamkul
        if(NewMamkul==null){
          firebase.firestore().collection('users').doc(uid).update({
            'Mamkul':this.state.Mamkul

          })
        alert("mamkul Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'Mamkul':this.state.NewMamkul
          })
          alert("New Mamkul Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })
    }



    updateEdu=()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const HighEdu = this.state.HighEdu
        const NewHighEdu = this.state.NewHighEdu
        if(NewHighEdu==null){
          firebase.firestore().collection('users').doc(uid).update({
            'HighEdu':this.state.HighEdu

          })
        alert("Education Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'HighEdu':this.state.NewHighEdu
          })
          alert("New Education Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })
    }



    updateOccupation=()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const Ocuupation = this.state.Ocuupation
        const NewOccupation = this.state.NewOccupation
        if(NewOccupation==null){
          firebase.firestore().collection('users').doc(uid).update({
            'Ocuupation':this.state.Ocuupation

          })
        alert("Occupation Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'Ocuupation':this.state.NewOccupation
          })
          alert("New Occupation Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
    }


    updateAge=()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const Age = this.state.Age
        const NewAge = this.state.NewAge
        if(NewAge==null){
          firebase.firestore().collection('users').doc(uid).update({
            'Age':this.state.Age

          })
        alert("Age Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'Age':this.state.NewAge
          })
          alert("New Age Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })
    }


    updateAddress=()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const Address = this.state.Address
        const NewAddress = this.state.NewAddress
        if(NewAddress==null){
          firebase.firestore().collection('users').doc(uid).update({
            'Address':this.state.Address

          })
        alert("Address Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'Address':this.state.NewAddress
          })
          alert("New Address Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })
    }


   

    updateStatus =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewStatus = this.state.checked
        firebase.firestore().collection('users').doc(uid).update({
          'engage':NewStatus

        })
        alert('Status Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })


    }



    facebookLink =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const facebook = this.state.facebook
        if(facebook==null){
          firebase.firestore().collection('users').doc(uid).update({
            'link_facebook':this.state.dfacebook

          })
        alert("url Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'link_facebook':this.state.facebook
          })
          alert("url  Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      

    }


    instagramLink =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const instagram = this.state.instagram
        if(instagram==null){
          firebase.firestore().collection('users').doc(uid).update({
            'link_instagram':this.state.dinstagram

          })
        alert("url Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'link_instagram':this.state.instagram
          })
          alert("url  Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      

    }


    twitterLink =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const twitter = this.state.twitter
        if(twitter==null){
          firebase.firestore().collection('users').doc(uid).update({
            'link_twitter':this.state.dtwitter

          })
        alert("url Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'link_twitter':this.state.twitter
          })
          alert("url  Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      

    }


    linkedinLink =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const linkedin = this.state.linkedin
        if(linkedin==null){
          firebase.firestore().collection('users').doc(uid).update({
            'link_linkdin':this.state.dlinkedin

          })
        alert("url Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'link_linkdin':this.state.linkedin
          })
          alert("url  Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      

    }


    pinterestLink =()=>{
      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const FullName = this.state.FullName
        const pinterest = this.state.pinterest
        if(pinterest==null){
          firebase.firestore().collection('users').doc(uid).update({
            'link_pinterest':this.state.dpinterest

          })
        alert("url Update")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'link_pinterest':this.state.pinterest
          })
          alert("url  Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })
      

    }



    updateBirthPlace=()=>{


      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const BirthPlace = this.state.BirthPlace
        const NewBirthPlace = this.state.NewBirthPlace
        if(NewBirthPlace==null){
          firebase.firestore().collection('users').doc(uid).update({
            'BirthPlace':this.state.BirthPlace

          })
        alert("Birth Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'BirthPlace':this.state.NewBirthPlace
          })
          alert("New Birth Place Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })


    }
    updateBirthTime=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
        const BirthTime = this.state.BirthTime
        const NewBirthTime = this.state.NewBirthTime
        if(NewBirthTime==null){
          firebase.firestore().collection('users').doc(uid).update({
            'BirthTime':this.state.BirthTime

          })
        alert("Birth Time Updated")}
        else{
          firebase.firestore().collection('users').doc(uid).update({
            'BirthTime':this.state.NewBirthTime
          })
          alert("New Birth Time Updated")
        }
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')

      }
    })

    }
    updateBirthDate=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewBirthDate = this.state.date
        firebase.firestore().collection('users').doc(uid).update({
          'date':NewBirthDate

        })
        alert('Birth date Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })




    }





    //Picker Update
    updateMaritalStatus=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewMaritalStatus = this.state.marital_status
        firebase.firestore().collection('users').doc(uid).update({
          'marital_status':NewMaritalStatus

        })
        alert('Marital Status Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateMotherTongue=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewMotherTongue = this.state.mother_tongue;
        firebase.firestore().collection('users').doc(uid).update({
          'mother_tongue':NewMotherTongue

        })
        alert('Mother Tongue Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateZodiacSign=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewZodiacSign = this.state.zodiac_sign;
        firebase.firestore().collection('users').doc(uid).update({
          'zodiac_sign':NewZodiacSign

        })
        alert('Zodiac Sign Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateHeight=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewHeight = this.state.Height
        firebase.firestore().collection('users').doc(uid).update({
          'Height':NewHeight

        })
        alert('height Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateBloodGroup=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewBloodGroup = this.state.blood_group
        firebase.firestore().collection('users').doc(uid).update({
          'blood_group':NewBloodGroup

        })
        alert('Marital Status Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateEmployeeIn=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewEmployeeIn = this.state.employee_in
        firebase.firestore().collection('users').doc(uid).update({
          'employee_in':NewEmployeeIn

        })
        alert('Employee Status Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }


    updateAnualIncome=()=>{

      this.setState({visible:true});
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){ 
        const email =user.email;
        const uid =user.uid;
      
        const NewAnnualIncome = this.state.anual_income
        firebase.firestore().collection('users').doc(uid).update({
          'anual_income':NewAnnualIncome

        })
        alert('Income Change')
        this.setState({visible:false});
      }else{
        alert('Something Goes Wrong')
      }
    })

    }













    render() {
      const { checked } = this.state;
      const { visible } = this.state;
        return (
          
          <View style={{ flex: 1,backgroundColor:'#fff'}}>
          <CustomHeader title="Edit Profile"navigation={this.props.navigation}/>
          < AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={IMAGE.LOADING_5}
                            animationStyle={styles.lottie}
                            speed={1}
             />
         <ScrollView>
          <View style={{alignItems:'center'}}>
            <Image style={{width:'100%',height:100}} source={require('./TabImages/imagebh5.jpg')} />
              <Text style={styles.username}>Edit Profile</Text>
            
                    <Text style={styles.line}>______________________________</Text>

                    <Text style={{color:'red'}}>*You can edit only general information</Text>
                    
            </View>
           
           
            <View style={{padding:10}}> 

                    <Item >
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewFullName:text})}}
                       placeholder="Full Name"
                       placeholderTextColor="#A4B0BD">
                        {this.state.FullName}
                      </Input>
                      
                      <TouchableOpacity disabled={!this.state.NewFullName}>
                                <Button  disabled={!this.state.NewFullName} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateFullName()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>
          
                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewMobNo:text})}}
                       keyboardType='phone-pad'
                       maxLength={10}
                       placeholder="Contact 1"
                       placeholderTextColor="#A4B0BD">
                        {this.state.MobNo}
                        </Input>
                        <TouchableOpacity disabled={!this.state.NewMobNo}>
                                <Button  disabled={!this.state.NewMobNo} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateMobNo()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewContact2:text})}}
                       keyboardType='phone-pad'
                       maxLength={10}
                       placeholder="Contact 2"
                       placeholderTextColor="#A4B0BD">
                         {this.state.Contact1}
                      </Input>
                      <TouchableOpacity disabled={!this.state.NewContact2}>
                                <Button disabled={!this.state.NewContact2} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateContact2()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewContact3:text})}}
                       keyboardType='phone-pad'
                       maxLength={10}
                       placeholder="Contact 3"
                       placeholderTextColor="#A4B0BD">
                         {this.state.Contact2}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewContact3}>
                                <Button  disabled={!this.state.NewContact3} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateContact3()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewMamkul:text})}}
                       placeholder="Mamkul"
                       placeholderTextColor="#A4B0BD">
                         {this.state.Mamkul}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewMamkul}>
                                <Button  disabled={!this.state.NewMamkul} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateMamkul()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewHighEdu:text})}}
                       placeholder="Highest Qualification"
                       multiline={true}
                       placeholderTextColor="#A4B0BD">
                         {this.state.HighEdu}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewHighEdu}>
                                <Button  disabled={!this.state.NewHighEdu} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateEdu()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input 
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewOccupation:text})}}
                       placeholder="Occupation"
                       multiline={true}
                       placeholderTextColor="#A4B0BD">
                         {this.state.Ocuupation}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewOccupation}>
                                <Button  disabled={!this.state.NewOccupation} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateOccupation()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewAge:text})}}
                       keyboardType='numeric'
                       maxLength={2} 
                       placeholder="Age"
                       placeholderTextColor="#A4B0BD">
                         {this.state.Age}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewAge}>
                                <Button  disabled={!this.state.NewAge} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateAge()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewBirthPlace:text})}}
                       multiline={true}
                       placeholder="Birth Place"
                       placeholderTextColor="#A4B0BD">
                         {this.state.BirthPlace}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewBirthPlace}>
                                <Button  disabled={!this.state.NewBirthPlace} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateBirthPlace()}}>Update</Button>
                      </TouchableOpacity>
                   </Item>

                   <Item>
                       <Input
                       style={{fontFamily:'Noto Sans Bold',color:'#777E8B'}}
                       onChangeText={(text)=>{this.setState({NewBirthTime:text})}}
                       multiline={true}
                       placeholder="Birth Time"
                       placeholderTextColor="#A4B0BD">
                         {this.state.BirthTime}
                          </Input>
                          <TouchableOpacity disabled={!this.state.NewBirthTime}>
                                <Button  disabled={!this.state.NewBirthTime} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateBirthTime()}}>Update</Button>
                       </TouchableOpacity>
                   </Item>



                <Text style={{fontSize:15,color:'#fff'}}>Date of Birth-जन्म तारीख</Text>
                    <Item >
                    <DatePicker 
                    style={{width:'95%',color:'#fff',alignItems:'center'}}
                    date={this.state.date}
                    format="DD-MM-YYYY"
                    minDate="10-07-1950"
                    maxDate ="31-08-2019"
                    onDateChange={this.selectDate}/>
                   
                    </Item>
                    <TouchableOpacity disabled={!this.state.date}>
                                <Button  disabled={!this.state.date} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateBirthDate()}}>Update</Button>
                       </TouchableOpacity>
                <Text style={{fontSize:15,color:'#A4B0BD'}}>{this.state.date}</Text>



                 {/*-----------------Picker-----------------------*/}  

            <Item>
                  <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
                  mode='dialog'
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.marital_status}onValueChange={this.updatemarry}>
                  <Picker.Item label ="Marital Status-वैवाहिक स्थिती" value={null} disabled={true}/>
                  <Picker.Item label ="Never Married-अविवाहित" value="Never Married" />
                  <Picker.Item label ="Awaiting Divorce-घटस्फोटाच्या प्रतीक्षेत" value="Awaiting Divorce" />
                  <Picker.Item label ="Divorced-घटस्फोटीत" value="Divorced" />
                  <Picker.Item label ="Widowed-विधवा" value="Widowed" />
                  <Picker.Item label ="Annulled-विवाह रद्द" value="Annulled" />
                  <Picker.Item label ="Married-विवाहित" value="Married" />
                </Picker>

                <TouchableOpacity disabled={!this.state.marital_status}>
                                <Button  disabled={!this.state.marital_status} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateMaritalStatus()}}>Update</Button>
                </TouchableOpacity>
            </Item>


            <Item>
            <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.mother_tongue}onValueChange={this.updatemt}>
               <Picker.Item label ="Mother Tongue-मातृभाषा" value={null} disabled={true}/>
              <Picker.Item label ="Marathi-मराठी" value="Marathi" />
              <Picker.Item label ="Hindi-हिन्दी" value="Hindi" />
              <Picker.Item label ="Telugu-तेलुगू" value="Telugu" />
              <Picker.Item label ="English-इंग्रजी" value="English" />
            </Picker>
            <TouchableOpacity disabled={!this.state.mother_tongue}>
                                <Button  disabled={!this.state.mother_tongue} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateMotherTongue()}}>Update</Button>
                </TouchableOpacity>
            </Item>


            <Item >
            <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.zodiac_sign}onValueChange={this.updatezs}>
               <Picker.Item label ="Zodiac Sign-रास" value={null} disabled={true}/>
              <Picker.Item label ="Aries-मेष" value="Aries-मेष" />
              <Picker.Item label ="Taurus-वृषभ" value="Taurus-वृषभ" />
              <Picker.Item label ="Gemini-मिथुन" value="Gemini-मिथुन" />
              <Picker.Item label ="Cancer-कर्क" value="Cancer-कर्क" />
              <Picker.Item label ="Leo-सिंहा" value="Leo-सिंहा" />
              <Picker.Item label ="Virgo-कन्या" value="Virgo-कन्या" />
              <Picker.Item label ="Libra-तुला" value="Libra-तुला" />
              <Picker.Item label ="Scorpio-वृश्चिक" value="Scorpio-वृश्चिक" />
              <Picker.Item label ="Sagittarius-धनू" value="Sagittarius-धनू" />
              <Picker.Item label ="Capricorn-मकर" value="Capricorn-मकर" />
              <Picker.Item label ="Aquarius-कुंभ" value="Aquarius-कुंभ" />
              <Picker.Item label ="Pices-मीन" value="Pices-मीन" />
            </Picker>
            <TouchableOpacity disabled={!this.state.zodiac_sign}>
                                <Button  disabled={!this.state.zodiac_sign} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateZodiacSign()}}>Update</Button>
                </TouchableOpacity>
            </Item>


            <Item >
             <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
              mode='dialog'
              iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.Height}onValueChange={this.Height}>
               <Picker.Item label ="Height-ऊंची" value={null} disabled={true}/>
              <Picker.Item label ="4'0''" value="4'0''" />
              <Picker.Item label ="4'1''" value="4'1''" />
              <Picker.Item label ="4'2''" value="4'2''" />
              <Picker.Item label ="4'3''" value="4'3''" />
              <Picker.Item label ="4'4''" value="4'4''" />
              <Picker.Item label ="4'5''" value="4'5''" />
              <Picker.Item label ="4'6''" value="4'6''" />
              <Picker.Item label ="4'7''" value="4'7''" />
              <Picker.Item label ="4'8''" value="4'8''" />
              <Picker.Item label ="4'9''" value="4'9''" />
              <Picker.Item label ="4'10''"value="4'10''"/>
              <Picker.Item label ="4'11''"value="4'11''"/>
              <Picker.Item label ="5'0''" value="5'0''" />
              <Picker.Item label ="5'1''" value="5'1''" />
              <Picker.Item label ="5'2''" value="5'2''" />
              <Picker.Item label ="5'3''" value="5'3''" />
              <Picker.Item label ="5'4''" value="5'4''" />
              <Picker.Item label ="5'5''" value="5'5''" />
              <Picker.Item label ="5'6''" value="5'6''" />
              <Picker.Item label ="5'7''" value="5'7''" />
              <Picker.Item label ="5'8''" value="5'8''" />
              <Picker.Item label ="5'9''" value="5'9''" />
              <Picker.Item label ="5'10''"value="5'10''"/>
              <Picker.Item label ="5'11''"value="5'11''" />
              <Picker.Item label ="6'0''" value="6'0''" />
              <Picker.Item label ="6'1''" value="6'1''" />
              <Picker.Item label ="6'2''" value="6'2''" />
              <Picker.Item label ="6'3''" value="6'3''" />
              <Picker.Item label ="6'4''" value="6'4''" />
              <Picker.Item label ="6'5''" value="6'5''" />
              <Picker.Item label ="6'6''" value="6'6''" />
              <Picker.Item label ="6'7''" value="6'7''" />
              <Picker.Item label ="6'8''" value="6'8''" />
              <Picker.Item label ="6'9''" value="6'9''" />
              <Picker.Item label ="6'10''" value="6'10''" />
              <Picker.Item label ="6'11''" value="6'11''" />
              <Picker.Item label ="7'" value="7'" />

             </Picker>
             <TouchableOpacity disabled={!this.state.Height}>
                                <Button  disabled={!this.state.Height} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateHeight()}}>Update</Button>
                </TouchableOpacity>
            </Item>


            <Item >
                <Picker  style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
                  mode='dialog'
                  iosHeader="gfgfg"
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.blood_group}onValueChange={this.updatebg}> 
                  <Picker.Item style={{color:'#000'}} label ="Blood Group-रक्त गट" value={null} disabled={true}/>
                  <Picker.Item label ="A+" value="A+" />
                  <Picker.Item label ="O+" value="O+" />
                  <Picker.Item label ="B+" value="B+" />
                  <Picker.Item label ="AB+" value="AB+" />
                  <Picker.Item label ="A-" value="A-" />
                  <Picker.Item label ="O-" value="O-" />
                  <Picker.Item label ="B-" value="B-" />
                  <Picker.Item label ="AB-" value="AB-" />
                </Picker>
                <TouchableOpacity disabled={!this.state.blood_group}>
                                <Button  disabled={!this.state.blood_group} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateBloodGroup()}}>Update</Button>
                </TouchableOpacity>
                </Item>
         

            <Item >
                <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
                  mode='dialog'
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.employee_in}onValueChange={this.updateei}>
                  <Picker.Item label ="Employeed In-कर्मचारी" value={null} disabled={true}/>
                  <Picker.Item label ="Private Sector-खासगी क्षेत्र" value="Private Sector" />
                  <Picker.Item label ="Government/Public Sector-सरकारी क्षेत्र" value="Government/Public Sector" />
                  <Picker.Item label ="Civil Services-नागरी सेवा" value="Civil Services" />
                  <Picker.Item label ="Defence-संरक्षण क्षेत्र" value="Defence" />
                  <Picker.Item label ="Business/self Employed-स्वयंरोजगार" value="Business/self Employed" />
                  <Picker.Item label ="Not Working-बेरोजगार" value="Not Working" />
                </Picker>
                <TouchableOpacity disabled={!this.state.employee_in}>
                                <Button  disabled={!this.state.employee_in} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateEmployeeIn()}}>Update</Button>
                </TouchableOpacity>
            </Item>


            <Item >
                <Picker style={{color:'#A4B0BD',padding:10,fontSize:20,fontWeight:'bold'}}
                  mode='dialog'
                  iosIcon={<Icon name="arrow-down" />}selectedValue={this.state.anual_income}onValueChange={this.updateai}>
         
                <Picker.Item label ="Select Anual Income-वार्षिक उत्पन्न"  value={null} disabled={true}/>
           
                  <Picker.Item label ="No Income" value="No Income" />
                  <Picker.Item label ="Rs.0-1 Lakh" value="Rs.0-1 Lakh" />
                  <Picker.Item label ="Rs.1-2 Lakh" value="Rs.1-2 Lakh" />
                  <Picker.Item label ="Rs.2-3 Lakh" value="Rs.2-3 Lakh" />
                  <Picker.Item label ="Rs.3-4 Lakh" value="Rs.3-4 Lakh" />
                  <Picker.Item label ="Rs.4-5 Lakh" value="Rs.4-5 Lakh" />
                  <Picker.Item label ="Rs.5-7.5 Lakh" value="Rs.5-7.5 Lakh" />
                  <Picker.Item label ="Rs.7.5-10 Lakh" value="Rs.7.5-10 Lakh" />
                  <Picker.Item label ="Rs.10-15 Lakh" value="Rs.10-15 Lakh" />
                  <Picker.Item label ="Rs.15-20 Lakh" value="Rs.15-20 Lakh" />
                  <Picker.Item label ="Rs.20-25 Lakh" value="Rs.20-25 Lakh" />
                  <Picker.Item label ="Rs.25-35 Lakh" value="Rs.25-35 Lakh" />
                  <Picker.Item label ="Rs.35-50 Lakh" value="Rs.35-50 Lakh" />
                  <Picker.Item label ="Rs.50-70 Lakh" value="Rs.50-70 Lakh" />
                  <Picker.Item label ="Rs.70 Lakh -1 crore" value="Rs.70 Lakh -1 crore" />
                  <Picker.Item label ="Rs.1 crore & above" value="Rs.1 crore & above" />
                </Picker>
                <TouchableOpacity disabled={!this.state.anual_income}>
                                <Button  disabled={!this.state.anual_income} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateAnualIncome()}}>Update</Button>
                </TouchableOpacity>
            </Item>
          


            <Item>
                <Input 
                    style={{color:'#777E8B',fontFamily:'Noto Sans Bold'}} 
                    onChangeText={(text)=>{this.setState({NewAddress:text})}}
                    multiline={true} numberOfLines={5} 
                    placeholder='Enter Complete Address'
                    placeholderTextColor="#A4B0BD">
                      {this.state.Address}
                    </Input>
                    <TouchableOpacity disabled={!this.state.NewAddress} >
                                <Button disabled={!this.state.NewAddress} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateAddress()}}>Update</Button>
                    </TouchableOpacity>
            </Item>
                  
              <Text style={{textAlign:'center',color:'#A4B0BD',fontSize:16,marginTop:10}}>Are You Engaged</Text>
                        <Text style={{textAlign:'center',color:'red'}}>*Update Status if you are engaged</Text>
                        <RadioButton.Group >
                            <View style={{flexDirection: 'row',padding:10}}>
                            <RadioButton value="No" status={checked === 'No' ? 'checked' : 'unchecked'}
                                  onPress={() => { this.setState({ checked: 'No' }); }}/>
                            <Text style={{marginLeft: 5,marginTop:7,color:'#A4B0BD',fontSize:15}}>No</Text>
                            </View>

                            <View style={{flexDirection: 'row',padding:10}}>
                            <RadioButton value="Yes" status={checked === 'Yes' ? 'checked' : 'unchecked'}
                                  onPress={() => { this.setState({ checked: 'Yes' }); }}/>
                            <Text style={{marginLeft: 5,marginTop:7,color:'#A4B0BD',fontSize:15}}>Yes</Text>
                            </View>
                        </RadioButton.Group>

              <Button  disabled={!this.state.checked} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.updateStatus()}}>Update</Button>
 




            <Text style={{textAlign:'center'}}>------------------------------------------</Text>


                <Item>
                  <SocialIcon style={styles.icons} type="facebook" />
                    <Input 
                    keyboardType='url'  
                    onChangeText={(text)=>{this.setState({facebook:text})}}
                    placeholderTextColor="#A4B0BD" 
                    placeholder='Facebook Link'>{this.state.dfacebook}</Input>
                    <Button disabled={!this.state.facebook}  style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.facebookLink()}}>Update</Button>
                </Item>


                <Item>
                  <SocialIcon style={styles.icons} type="instagram" />
                    <Input 
                    keyboardType='url'  
                    onChangeText={(text)=>{this.setState({instagram:text})}}
                    placeholderTextColor="#A4B0BD"
                    placeholder='Instagram Link'>{this.state.dinstagram}</Input>
                    <Button disabled={!this.state.instagram} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.instagramLink()}}>Update</Button>
                </Item>


                <Item>
                  <SocialIcon style={styles.icons} type="twitter" />
                    <Input 
                    keyboardType='url' 
                    onChangeText={(text)=>{this.setState({twitter:text})}}
                    placeholderTextColor="#A4B0BD" 
                    placeholder='Twitter Link'>{this.state.dtwitter}</Input>
                   <Button disabled={!this.state.twitter} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.twitterLink()}}>Update</Button>
                </Item>

                <Item>
                  <SocialIcon style={styles.icons} type="linkedin" />
                    <Input 
                    keyboardType='url' 
                    onChangeText={(text)=>{this.setState({linkedin:text})}}
                    placeholderTextColor="#A4B0BD" 
                    placeholder='Linkedin Link'>{this.state.dlinkedin}</Input>
                    <Button disabled={!this.state.linkedin} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.linkedinLink()}}>Update</Button>
                </Item>

                <Item>
                  <SocialIcon style={styles.icons} type="pinterest" />
                    <Input 
                    keyboardType='url' 
                    onChangeText={(text)=>{this.setState({pinterest:text})}}
                    placeholderTextColor="#A4B0BD" 
                    placeholder='Pinterest Link'>{this.state.dpinterest}</Input>
                    <Button disabled={!this.state.pinterest} style={{fontWeight:'bold',alignItems:'center'}} onPress={() => {this.pinterestLink()}}>Update</Button> 
                </Item>

                </View>


                               <Text style={{color:'red',textAlign:'center'}}>If You want to delete your account,You need to send delete email to Us.
                                 
                               </Text>
                               <Text style={{color:'#000',textAlign:'center'}}>vpscorelim200@gmail.com
                                 
                                 </Text>
                <Button style={{fontWeight:'bold',padding:10}}onPress={()=>this.props.navigation.goBack()} >Cancel</Button>
           
                    </ScrollView>
        </View>

           
        )
    }
}




const styles = StyleSheet.create({
  viewContainer:{
    flex:1,
    
    alignItems:'center',
    backgroundColor:'#fff',
    width:330,
    
    marginTop:15
  
   },
   username:{
    fontSize:18,
    
    padding:5,
    color:'#777E8B',
    fontFamily:'Noto Sans Bold'
  },
  line:{
    color:'#8667EB'
   },
   lottie: {
    width: 100,
    height: 100
  },
  icons:{
    width:35,
    height:35,
   },
    
})

