import React from 'react';
import { SafeAreaView ,View } from 'react-native';
import Card from './app/component/Card';

function App(props) {
  return (
   <View style={{
    backgroundColor: "#f8f4f4",
    padding : 20,
    paddingTop : 100
   }}>

   <Card 
   title = "Red jacket for sale  "
   subTitle = "$100"
   image ={require("./app/assets/jacket.jpg")} />

   </View>
  );
}

export default App;
