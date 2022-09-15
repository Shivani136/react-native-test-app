import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import colors from '../config/colors';
import Screens from '../component/Screens';
import Card from '../component/Card';
import routes from '../navigation/routes';

function ListingScreen({ navigation}) {

    const listings = [ 
        {
            id: 1,
            title : 'Red Jacket For Sale',
            price : 100,
            image : require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title : 'Counch in greate condition',
            price : 1000,
            image : require('../assets/couch.jpg')
        },
    ]    
    return (
        <Screens style= { styles.screen}>
        <FlatList data ={listings} keyExtractor ={listings=> listings.id.toString()}

        renderItem = {({item})=> (
        <Card  
        title={item.title}
        subTitle = {"$" + item.price}
        image = { item.image}
        
        onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item )}
         />
        )}
        />
     </Screens> 
    );
}
const styles = StyleSheet.create({
    screen : {
        padding : 10,
        backgroundColor : colors.white,
      
    }
})

export default ListingScreen;