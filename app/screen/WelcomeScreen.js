import React from 'react';
import { ImageBackground , StyleSheet,View, Text, Image} from 'react-native';
import AppButton from '../component/AppButton';

function WelcomeScreen(props) {
    return (
      
         <ImageBackground 
          blurRadius = {10}
         style ={styles.background}
         source={require("../assets/background.jpg")}>

         <View style ={styles.logoContainer}>
         <Image style={styles.logo} 
         source={ require('../assets/logo-red.png')} />
         <Text style={styles.tagLine}>Sell What You Don't Need </Text>
        </View>

        <View style={styles.buttonContainer}>
         <AppButton title="Login" onPress={()=>console.log("Tapped")}></AppButton>
         <AppButton title="Register" color="secondary" onPress={()=>console.log("Tapped")}></AppButton>
         {/* <View style={styles.registerButton}></View> */}

        </View>

         </ImageBackground>   
        
    );
}
const styles = StyleSheet.create({
    background : {
        flex :1,
       justifyContent: 'flex-end',
       alignItems: 'center'
    },
    buttonContainer :{
    padding: 50,
    width: '100%'
    },
    tagLine : {
    fontSize : 25,
    fontWeight: "bold",
    padding: 20
    },
    registerButton : {
    width : '100%',
    height : 70,
    backgroundColor : '#4ecdc4'
    },
    logo : {
    width : 100,
    height : 100,
    }, 
    logoContainer:{
    position : 'absolute',
    alignItems: 'center',
    top : 70
    
}
})
export default WelcomeScreen;