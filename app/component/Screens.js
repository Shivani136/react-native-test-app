import React from 'react';
import Constants from 'expo-constants';
import { StatusBar,StyleSheet,View, SafeAreaView} from 'react-native';


function Screens({children , style}) {
    return (
        // <SafeAreaView style ={ [styles.screen , style, {backgroundColor : "yellow"}]}>
        <SafeAreaView style ={ [styles.screen , style]}>
          <View style={[styles.view,  style ]}>
          {/* <View style={[style , { flex : 1, backgroundColor : "orange"} ]}> */}
          {children}
          </View>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
     screen : {
         //paddingTop : Constants.StatusBarHeight 
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight:0 ,
         flex :1 
        //backgroundColor : "yellow",
     } ,
     view:{
        flex : 1
     }
})
export default Screens;