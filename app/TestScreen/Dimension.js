import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { useDimensions , useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {

  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  const { landscape} = useDeviceOrientation() ;

 return (
    <SafeAreaView style={ styles.container}>
      <Text>Detecting Orientation changingss </Text>
     <View style={{
      backgroundColor :'dodgerblue',
      width : '100%',
      height : landscape ? '100%' : '30%' //dynamically height set 
      }}>
      </View> 
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    }
 
});
