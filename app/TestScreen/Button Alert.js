import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, SafeAreaView,Alert} from 'react-native';


export default function Button() {
 return (
    <SafeAreaView style={ styles.container}>
      <Text style={ styles.logo}>Open up App.js to start working on your app!</Text>
  <Button title="click me" onPress={() =>alert("button tapped")}/>
  <Button title="click me" onPress={() => console.log("button tapped")}/>
  <Button title="click Me" onPress={() => Alert.alert("My Title", "My message", [
    {text: "Yes", onPress : ()=> console.log('Yes') },
    {text: "No", onPress : ()=> console.log('No') },
  ])
} 
/>


{/* <Button title="promt button" onPress={() => Alert.promt("My Title", "My message", 
    text => console.log(text))} 
/> working only in ios
   */} 

    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor : "pink"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingBottom: 20
  }
});
