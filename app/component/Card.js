import React from 'react';
import {StyleSheet,View, Text, Image} from 'react-native';
import colors from '../config/colors';
// import AppText from './AppText';

function Card({ title, subTitle, image}) {
    return (
    <View  style={styles.card}>
    <Image  style={styles.image} 
     source={(image)} />
    <View style={styles.detailsContainer} >
        <Text style={styles.title}>{title}</Text>
        <Text  style={styles.subtitle}>{subTitle}</Text>

    </View>
    </View>    
    );
}

const styles = StyleSheet.create({
        card :{
        backgroundColor: colors.white,
        borderRadius : 15,
        marginBottom : 20,
        overFlow : "hidden",
       },
       detailsContainer :{
        padding : 20
       },
       title:{
        marginBottom: 7
       },
       subtitle :{
        color : colors.secondary,
        fontWeight: "bold"
       },
      image :{
        width : '100%',
        height: 200, 
        borderRadius : 15,
        
  
         }
})

export default Card;