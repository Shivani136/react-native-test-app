import React from "react";
import { StyleSheet, Text, View, NetInfo } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
