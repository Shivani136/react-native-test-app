import React ,{useState} from 'react';
import { SafeAreaView ,View, Switch ,Text} from 'react-native';
import Card from './app/component/Card';
import ListeningDetailScreen from './app/screen/ListeningDetailScreen';
import ListItem from './app/component/list/ListItem';
import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImage from './app/screen/ViewImage';
import MessagesScreens from './app/screen/MessagesScreens';
import AccountScreen from './app/screen/AccountScreen';
import ListingScreen from './app/screen/ListingScreen';
import TextInput from './app/screen/TextInput';
import AppTextInput from './app/component/AppTextInput';
import AppPicker from './app/component/AppPicker';
import Screens from './app/component/Screens';
import Icon from './app/component/Icon';
import LoginScreen from './app/screen/LoginScreen';
import RegisterScreen from './app/screen/RegisterScreen';
import ListingEditScreen from './app/screen/ListingEditScreen';

function App() {
return (
 <ListingEditScreen />
      //<RegisterScreen />
    /* <LoginScreen /> */
      //<ListItem />

    // <AppTextInput placeholder= "UserName " icon ="email"/>
    // <ListingScreen />
    /* <AccountScreen /> */
    //  <Screens>
    //  <ListItem  
    //   title="My Title"
    //   ImageComponent = <Icon  name="email"/>
    //  />
    //  {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white"/>  */}

    //  </Screens>
    //  <ListeningDetailScreen />
    //  <WelcomeScreen />
    //  <ViewImage />
    //  <MessagesScreens />
  );
}

export default App;







