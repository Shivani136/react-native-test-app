import React from 'react';
import { ImageBackground , StyleSheet,View, Text, Image , TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({
        image,
        title, 
        subTitle,
        onPress ,
        IconComponent ,
        renderRightActions
    }) { //destructer the props arguments

    return (
        // <TouchableOpacity>
        
     <Swipeable renderRightActions ={renderRightActions}>
       <TouchableHighlight 
       underlayColor = {colors.light}
       onPress={onPress}>
       <View style={ styles.container}>
       { IconComponent}
      { image && <Image source={ image} style={styles.image} /> } 

       <View style={ styles.detailsContainer}>
       <Text style={ styles.title}>{title} </Text>
      {subTitle && <Text style={ styles.subTitle}>{subTitle} </Text> } 
       </View>
       </View>
       </TouchableHighlight>
       {/* </TouchableOpacity> */}
    </Swipeable>
       
    );
}
const styles = StyleSheet.create({

    container : {
    flexDirection : "row",
    padding : 15,
    backgroundColor : colors.white
    },
   image:{
    width : 70,
    height : 70,
    borderRadius : 35,
    // marginRight : 10
   },
   title :{
    fontWeight : "500"
   },
   subTitle: {
    color : colors.medium
   },
   detailsContainer:{
    marginLeft : 10,
    justifyContent: "center"
   }
    
})
export default ListItem;