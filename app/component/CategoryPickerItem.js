import React from 'react';
import { StyleSheet,Text,View ,TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function CategoryPickerItem({item ,onPress}) {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
    ) ;
    
}

const styles = StyleSheet.create({
   container : {
    paddingHorizental : 30 ,
    paddingVertical : 15,
    alignItems: "center",
    width : "33%"
   } ,
   label :{
    marginTop : 5,
    textAlign: "center",
   }
})
export default CategoryPickerItem;


