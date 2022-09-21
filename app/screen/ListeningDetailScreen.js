import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import ListItem from "../component/list/ListItem";
import { Image } from "react-native-expo-image-cache";

function ListeningDetailScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      {/* <Image style={styles.image} source={require("../assets/jacket.jpg")} />
  
        <View style={styles.detailsContainer} >
        <Text style={styles.title}>Red jacket for sale </Text>
        <Text style={styles.price}>$100 </Text>
        </View> */}
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listenings"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 10,
  },
});
export default ListeningDetailScreen;
