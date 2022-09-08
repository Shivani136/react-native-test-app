import React from 'react';
import { StyleSheet,  View} from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Button() {
 return (
 <View style={{ 
   flex : 1,
   alignItems : 'center',
   justifyContent : 'center'
 }}> 
 
 <Entypo name="mail" size={50} color="dodgerblue" />
 {/* For Boders */}
 <View style={{
  width : 100,
  height : 100,
  borderWidth: 10,
  borderColor: 'royalblue',
  borderRadius: 50,
  // borderTopWidth : 20,
  // borderTopLeftRadius: 50,
  backgroundColor :'dodgerblue',

 }}>
 </View>

 <View style={{
  width : 100,
  height : 100,
  backgroundColor :'yellow',
  elevation: 20

 }}>
 </View>

 </View>
  );
}




















