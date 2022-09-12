import React from 'react';
import Constants from 'expo-constants';
import { StatusBar,StyleSheet,View, SafeAreaView} from 'react-native';


function Screens({children , style}) {
    return (
    
        <SafeAreaView style ={ [styles.screen , style]}>
          <View style={[styles.view,  style ]}>
        
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
       
     } ,
     view:{
        flex : 1
     }
})
export default Screens;