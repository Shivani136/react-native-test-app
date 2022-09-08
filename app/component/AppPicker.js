import React,{useState} from 'react';
import { StyleSheet,
        View, 
        Text,
        Image, 
        FlatList, 
        TextInput,
        TouchableWithoutFeedback ,
        Modal,
        Button,
        } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyle from '../config/styles';
import Screens from './Screens';
import PickerItem from './PickerItem';

function AppPicker ({ 
        icon,
        items ,
        placeholder ,
        selectedItem , 
        onSelectItem
  }) {
const [modelVisible, setModelVisible] = useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModelVisible(true)}>
        <View style={ styles.container}>
        {icon &&  
        <MaterialCommunityIcons 
         name={icon} 
         size={20} 
         color = {defaultStyle.colors.medium}
         style={styles.icon}/> 
         }

      { selectedItem ? (
        <Text style={styles.text} > { selectedItem.label }</Text>
        ) :  <Text style={styles.placeholder}> { placeholder }</Text> 
        }

       {/* <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder} </Text> */}

       <MaterialCommunityIcons 
         name="chevron-down"
         size={20} 
         color = {defaultStyle.colors.medium}
       /> 
        
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modelVisible} animationType="slide">
        <Screens>
        <Button  title="Close" onPress={()=> setModelVisible(false)}></Button>
        <FlatList data ={items} keyExtractor ={item=> item.value.toString()}
         renderItem = {({item})=> (
            <PickerItem 
            label = {item.label}
            onPress= {() => {
                setModelVisible(false);
                onSelectItem(item);
            }}/>
            )}
         />
       
        </Screens>

        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
      container : {
        paddingTop : 20,
        backgroundColor : colors.light,
        borderRadius :25,
        flexDirection : 'row',
        width : '100%',
        padding: 15,
        marginVertical : 10
         },
        icon: {
        marginRight : 10 
        },
        text : {
            flex : 1
        },
       placeholder :{ 
        color : defaultStyle.colors.medium,
        flex : 1
       }
      
})

export default AppPicker;