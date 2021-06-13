import React, { Component } from 'react';
import { Text, 
    View ,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    StyleSheet,
     
    Button} from 'react-native';

import {getNotification} from '../TabScreen/NotifyApi';
import {CustomHeader,CustomDrawerContent} from '../index'  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem, Divider } from 'react-native-elements';
import { IMAGE } from '../image';


export class NotificationsScreen extends Component {


    state = {
        foodList: [],
        selectedIndex: 0
      }

      onFoodsReceived = (foodList) => {
   
        this.setState(prevState => ({
          foodList: prevState.foodList = foodList
        }));
      }

      componentDidMount(){
   
          getNotification(this.onFoodsReceived);
      
      }




 



    render() {
        return (
            <View style={{ flex: 1,backgroundColor:'#EAF0F1'}}>
            <StatusBar  barStyle="light-content" backgroundColor = "#8667EB" showHideTransition='fade'/>

            <CustomHeader title="Notification Screen" navigation={this.props.navigation} />
            <ScrollView showsVerticalScrollIndicator={false} >
            <View >
               


               <FlatList contentContainerStyle={{padding:10,marginTop:10}}
          data={this.state.foodList}
         
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
               <ListItem
                containerStyle={styles.listItem}
                title={item.title}
                subtitle={item.subtitle}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
                leftAvatar={{
                  size: 'medium',
                  rounded: false,
                  source: IMAGE.NOTI_LOGO,
                }}
                

              />
              </TouchableOpacity>
               



              );
            }
            }
          />


               </View>
            </ScrollView>
          </View>
          );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    listItem: {
      marginTop: 8,
      marginBottom: 8,
      borderRadius:20
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 20,
      fontFamily:'Noto Sans'
    },
    subtitleStyle: {
      fontSize: 18
    },
    emptyTitle: {
      fontSize: 32,
      marginBottom: 16
    },
    emptySubtitle: {
      fontSize: 18,
      fontStyle: 'italic'
    }
  });