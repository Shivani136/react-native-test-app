import React from 'react';
import { StyleSheet,View} from 'react-native';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormPicker({name ,items,placeholder}) {

 const { setFieldValue ,values , errors, touched }  =  useFormikContext();
    return (
        <>
        <AppPicker 
        items = { items}
        onSelectItem = {(item) => setFieldValue(name ,item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        /> 
        <ErrorMessage error = {errors[name]} visible={ touched[name]}/>
        </>
    );
}

export default AppFormPicker;