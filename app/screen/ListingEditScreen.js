import React from 'react';
import { StyleSheet,} from 'react-native';
import Screens from '../component/Screens';
import CategoryPickerItem from '../component/CategoryPickerItem';
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
  { label : 'Furniture', value : 1, backgroundColor : 'red', icon : "lamp"},
  { label : 'Car', value : 2 , backgroundColor : "green", icon : "car"},
  { label : 'Cameras', value : 3 , backgroundColor : "blue", icon : "camera"},

  { label : 'Games', value : 4, backgroundColor : 'orange', icon : "slack"},
  { label : 'Clothings', value : 5 , backgroundColor : "purple", icon : "tablet"},
  { label : 'Sports', value : 6 , backgroundColor : "gray", icon : "truck"},

  { label : 'Movie and Music', value : 7, backgroundColor : 'pink', icon : "music"},
  { label : 'Book', value : 8 , backgroundColor : "brown", icon : "book"},
  { label : 'Other', value : 9, backgroundColor : "cyan", icon : "apps"}
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
        width = { 120}
        />
      <Picker 
       items = {categories }
        name = "category"
        placeholder= "Category"
        numberOfColumns ={3}
        PickerItemComponent = {CategoryPickerItem }
        width= "50%"
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