import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import ActivityIndicator from "../component/ActivityIndicator";
import Button from "../component/AppButton";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screens from "../component/Screens";
import Card from "../component/Card";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screens style={styles.screen}>
      {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the Listings.</Text>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}

      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screens>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.white,
  },
});

export default ListingScreen;
