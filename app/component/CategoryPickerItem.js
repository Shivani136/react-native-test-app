import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function CategoryPickerItem({item ,onPress}) {
    return (
        <View style={ styles.container}>
        <Icon backgroundColor ={item.backgroundColor} name={item.icon} size={80}/>
       <Text style={ styles.label}>{item.label}</Text>
        </View>
    ) ;
    
}

const styles = StyleSheet.create({
   container : {
    paddingHorizental : 30 ,
    paddingVertical : 15,
    alignItems: "center",
    // alignItems : "center",
    width : "33%"
   } ,
   label :{
    marginTop : 5
   }
})
export default CategoryPickerItem;