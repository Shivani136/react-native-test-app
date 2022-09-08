import React from 'react';
import { StyleSheet,View, Text, Image, FlatList} from 'react-native';
import colors from '../config/colors';
import Screens from '../component/Screens';
import Icon from '../component/Icon';
import ListItem from '../component/list/ListItem';
import ListItemSeperator from '../component/list/ListItemSeperator';



function AccountScreen(props) {

const menuItems = [ 
    {
        title: "My Listings",
        icon :{
            name : 'formate-list-bulleted',
            backgroundColor : colors.primary
        }
    },
    {
        title :"My Account",
        icon :{
            name : 'email',
            backgroundColor : colors.secondary
        }
     }
]
return (
        <Screens style={ styles.screen}>
         <View style={ styles.container}>
        <ListItem  
         title="My Title"
         subTitle = 'programmingwithmosh@gmail.com'
         image = { require('../assets/mosh.jpg')}
        />
     </View>

     <View style={ styles.container}>
     <FlatList 
     data ={ menuItems }
     keyExtractor = { (menuItems) => menuItems.title }
     ItemSepratorComponent = { ListItemSeperator }
     renderItem = {({item})=> (
     <ListItem 
       title={item.title}
       IconComponent = {
        <Icon 
        name = {item.icon.name}
        backgroundColor = {item.icon.backgroundColor}
        /> 
       }
     
        />
      )}
     />
     </View>

     <ListItem 
       title="LogOut" 
       IconComponent = {
        <Icon 
        name = "logout"
        backgroundColor = "#ffe66d"
        // backgroundColor = colors.yellow
        /> 
       }
       />
     </Screens>
    );
}
 const styles = StyleSheet.create({
    container : {
        marginVertical : 20 
    },
    screen : {
        backgroundColor : colors.light
    }
 })

export default AccountScreen;