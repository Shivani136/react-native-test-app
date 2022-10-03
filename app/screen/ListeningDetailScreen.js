import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Text
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../component/ContactSellerForm";
import ListItem from "../component/list/ListItem";
// import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
    behavior="position"
    keyboardVerticalOffset={
      Platform.OS === "ios"
        ? 180
        : 200 && Platform.OS === "android"
        ? 150
        : 250
    }
  >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
