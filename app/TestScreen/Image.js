import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView ,Image} from 'react-native';
import { Dimensions } from 'react-native';

export default function Image() {
// console.log(require('./assets/flower.png'));
return (
<SafeAreaView style={ styles.container}>
    <Text style={ styles.logo}>Open up App.js to start working on your app!</Text>
    <Image source={{ width: 300,
    height:400,   
    uri:'https://picsum.photos/id/237/200/300'} }/>
    {/* <Image source={ require('./assets/flower.png')}/> */}
   
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
