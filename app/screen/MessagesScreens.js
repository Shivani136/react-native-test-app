import React,{useState} from 'react';
import { StyleSheet , FlatList ,View} from 'react-native';
import Screens from '../component/Screens';
import ListItem from '../component/list/ListItem';
import ListItemSeperator from '../component/list/ListItemSeperator';
import ListItemDeleteAction from '../component/list/ListItemDeleteAction';

const intialMessages = [
   {
   id : 1,
   title : 'Lorem Ipsum has been the industrys standard dummy text ever since ',
   description : 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
   image : require("../assets/mosh.jpg")
  },
  {
   id : 2,
   title : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
   description : 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
   image : require("../assets/mosh.jpg")
  }
]

function MessagesScreens(props) {
const [messages , setMessages] = useState(intialMessages);
const [refreshing, setRefreshing] = useState(false);


const handleDelete = (message) =>{
   // Delete the msg from messages
   setMessages(messages.filter((m) => m.id !== message.id));
}

 
    return (
        <Screens>
       <FlatList data ={messages} keyExtractor ={message=> message.id.toString()}

       renderItem = {({item})=> (
       <ListItem  title={item.title}
       subTitle = { item.description}
       image ={ item.image}
       onPress={ ()=> console.log("touclable heighlight is tapped", item)}  
       renderRightActions={()=> 
       <ListItemDeleteAction onPress={ ()=> handleDelete("hee", item)}  />}
       />
       )} 

       ItemSepratorComponent={ListItemSeperator}
       refreshing ={ refreshing}
        onRefresh={() => {
         setMessages([
            {
            id : 2,
            title : 'T2',
            description : 'D2',
            image : require("../assets/mosh.jpg")
         },
         ])
         }}
       />
       </Screens>
      );
}
const styles = StyleSheet.create({
   
})
export default MessagesScreens; 