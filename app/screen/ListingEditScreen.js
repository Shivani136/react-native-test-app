import React from 'react';
import { StyleSheet,} from 'react-native';
import Screens from '../component/Screens';
import * as Yup from 'yup';
import { 
      AppForm ,
      AppFormField as FormField ,
      AppFormPicker as Picker,
      SubmitButon
      } from  '../component/forms';

const validationSchema = Yup.object().shape({  // for input validation 
    title : Yup.string().required().min(1).label("Title"),
    price : Yup.number().required().min(1).max(10000).label("Price"),
    description : Yup.string().label("Description"),
    category : Yup.object().required().nullable().label("Category")
});

const categories = [ 
  { label : 'Furniture', value : 1},
  { label : 'Clothings', value : 2},
  { label : 'Cameras', value : 3}
]

function ListingEditScreen() {
  return (
        <Screens style = { styles.container}>
        <AppForm 
        
        initialValues = {{
          title : '',
          price : '',
          description :'',
          category : null
          }}

        onSubmit={(values) => console.log(values)}
        validationSchema ={ validationSchema }
        >
         <FormField 
        maxLength ={255}
        name = "title"
        placeholder= "Title"
        />
         <FormField 
        keyboardType= "numeric"
        maxLength ={255}
        name = "price"
        placeholder= "Price"
        />
      <Picker 
       items = {categories }
        name = "category"
        placeholder= "Category"
      
        />
      
         <FormField 
         maxLength ={255}
         multiline
        name = "description"
        // numberOfLines = {3}
        placeholder= "Description"
       
        />
      
       <SubmitButon title="Post"/>
       
       </AppForm>
      </Screens>
    );
}

const styles = StyleSheet.create({
    container :{
     padding: 10
    },
     
})
export default ListingEditScreen;