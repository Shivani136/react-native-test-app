import React from 'react';
import { StyleSheet, Image,} from 'react-native';
import Screens from '../component/Screens';
import * as Yup from 'yup';
import { AppForm ,AppFormField ,SubmitButon} from  '../component/forms';

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(4).label("Password")
});


function LoginScreen(props) {
  return (
        <Screens style = { styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")}/> 

        <AppForm // for input validation 
        
        initialValues = {{ email : '', password : ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema ={validationSchema}
        >
         <AppFormField 
        autoCapitalize = "none"
        autoCorrect = {false}
        icon="email"
        keyboardType= "email-address"
        name = "email"
        placeholder= "Email"
        textContentType="emailAddress"
        />
         <AppFormField 
        autoCapitalize = "none"
        autoCorrect = {false}
        icon="lock"
        name = "password"
        placeholder= "Password"
        secureTextEntry= { true}
        textContentType="password"
        />
      
       <SubmitButon title="Login"/>
       
       </AppForm>
      </Screens>
    );
}

const styles = StyleSheet.create({
    container :{
     padding: 10
    },
      logo : {
        width: 80,
        height: 80,
        alignSelf : 'center',
        marginTop: 50,
        marginBottom: 20,
      }
})
export default LoginScreen;