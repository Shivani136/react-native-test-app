import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormPicker({ 
    name ,
    width,
    items,
    numberOfColumns,
    PickerItemComponent ,
    placeholder
    }) {

 const { setFieldValue ,values , errors, touched }  =  useFormikContext();
   return (
        <>
        <AppPicker 
        items = { items}
        numberOfColumns = {numberOfColumns}
        onSelectItem = {(item) => setFieldValue(name ,item)}
        PickerItemComponent = { PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width = { width}
        /> 
        <ErrorMessage error = {errors[name]} visible={ touched[name]}/>
        </>
    );

    
}

export default AppFormPicker;






