import React from 'react';
import LottieView from 'lottie-react-native';



function ActivityIndicator({visible = false}) {
if(! visible) return null ;
    return <LottieView 
    autoPlay
    loop
     source={ require ('../assets/Animation/lf30_editor_w9iavoz8.json')}
     />
     
}


export default ActivityIndicator;