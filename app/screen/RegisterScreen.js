import React from 'react';
import { StyleSheet,} from 'react-native';
import Screens from '../component/Screens';
import { FontAwesome } from '@expo/vector-icons';
import * as Yup from 'yup';
import { AppForm ,AppFormField ,SubmitButon} from  '../component/forms';

const validationSchema = Yup.object().shape({
     name : Yup.string().required().min(1).label("Name"),
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(4).label("Password")
});


function RegisterScreen(props) {
  return (
        <Screens style = { styles.container}>
      

        <AppForm // for input validation 
        
        initialValues = {{name: '', email : '', password : ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema ={validationSchema}
        >
        {/* <FontAwesome name="user" size={24} color="black" /> */}
        <AppFormField 
        autoCapitalize = "none"
        autoCorrect = {false}
        icon = "bell"
        
        // icon="bell"
        keyboardType= "name"
        name = "name"
        placeholder= "Name"
        textContentType="name"
        />
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
      
       <SubmitButon title="Register"/>
       
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
export default RegisterScreen;