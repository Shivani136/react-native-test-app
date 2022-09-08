import { StyleSheet, View,SafeAreaView } from 'react-native';

export default function App() {
 return (
    <SafeAreaView style={ styles.container}>
     
     <View style={{
      flex : 1 ,
      flexDirection : 'row' ,
      justifyContent : 'center',
      alignItems : 'center',
      // flexWrap : 'wrap',
      backgroundColor :'#fff',
      }}>
    

     <View style={{
      width : 400,
      height : 100 ,
      flexShrink : 1 ,
      flexBasis : 100, //width or height
      flexGrow : 1 ,// same as flex
      backgroundColor :'dodgerblue',
      }}>
     </View> 

     <View style={{
      width : 100,
      height : 100 ,
      top: -20,
      backgroundColor :'gold',
      }}>
     </View> 

     <View style={{
      width : 100,
      height : 100 ,
      backgroundColor :'tomato',
      }}>
     </View> 

     {/* <View style={{
      width : 100,
      height : 100 ,
      backgroundColor :'grey',
      }}>
     </View> 
     <View style={{
      width : 100,
      height : 100 ,
      backgroundColor :'greenyellow',
      }}>
     </View>  */}
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
