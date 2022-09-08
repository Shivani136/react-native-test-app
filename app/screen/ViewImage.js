import React from 'react';
import { ImageBackground , StyleSheet,View, Text, Image} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImage(props) {
    return (
        <View style={ styles.container}>
        <View style={ styles.closeIcon}>
        <MaterialCommunityIcons  name="close" size={30} color="white"/>
        </View>
        <View style={ styles.deleteIcon}>
        <MaterialCommunityIcons  name="trash-can-outline" size={30} color="white"/>
        </View>
       <Image  resizeMode="contain"  style={ styles.image}
        source={require('../assets/chair.jpg')} />
        </View>
    );
}
const styles = StyleSheet.create({
    image :{
        width : '100%',
        height : '100%',
      },
    container : {
        flex: 1,
        backgroundColor : colors.black
     },
     closeIcon :{
       
        top: 40,
        left: 30,
        position : 'absolute',
        
     },
      deleteIcon :{
       
        top: 40,
        right: 30,
        position : 'absolute',
       
     }
})

export default ViewImage;