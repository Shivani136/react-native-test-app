import React , { useEffect} from 'react';
import { StyleSheet,View,Image ,TouchableWithoutFeedback , Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri, onChangeImage}) {

    // useEffect(() => {
    //     requestPermission();
    //   }, [])

    // const requestPermission = async()=>{
    //    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    //         if(!granted){
    //           alert('you need to enable permission to access the library ')
    //         }
    //     }

                       
const handlePress=()=>{
    if(!imageUri) selectImage();
    else
     Alert.alert('Delete , are you sure want to delete this ',[
        {text : 'yes', onPress:() => onChangeImage(null) },
        { text : 'No'},
    ]);
   
};

const selectImage = async()=>{
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.Images,
        quality : 0.5,
      });

      if(!result.cancelled) onChangeImage(result.uri);
    } 
    catch (error) {
      console.log("Error reading an image ", error)
    }
  };
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style= { styles.container}>
        {!imageUri && (<MaterialCommunityIcons name="camera" size={10} color={colors.medium} />
          )} 
          { imageUri && <Image source = {{uri : imageUri}} style={styles.image}/>}
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container : { 
     alignItems : "center",
     justifyContent : 'center',
     height : 100,
     width : 100,
     backgroundColor : colors.medium,
     borderRadius: 15,
     overflow : 'hidden'
     },
     image:{
        width : '100%',
        height: '100%'
     }
})

export default ImageInput;