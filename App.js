import React ,{ useState , useEffect } from 'react';
import { SafeAreaView ,View, Switch ,Text, Button , Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Screens from './app/component/Screens';
import ImageInput from './app/component/ImageInput';


function App() {
const [ imageUri ,setImageUri] = useState('');

const requestPermission = async()=>{
// const result = await Permissions.askAsync( Permissions.CAMERA_ROLL.Permissions.Location )
   const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted){
      alert('you need to enable permission to access the library ')
    }
}
 useEffect(() => {
  requestPermission();
}, [])

const selectImage = async()=>{
 try {
  const result = await ImagePicker.launchImageLibraryAsync();
  if(!result.cancelled) setImageUri(result.uri);
  } catch (error) {
  console.log("Error reading an image ", error)
  }
  };

return (
<Screens>
{/* <Button title="Select Image" onPress= {selectImage }></Button>
<Image source= {{  uri: imageUri }} style= {{ width : 200, height :200}}/> */}
<ImageInput imageUri = {imageUri }
 onChangeImage = {(uri)=> setImageUri(uri) }/>
</Screens>
   );
}

export default App;







