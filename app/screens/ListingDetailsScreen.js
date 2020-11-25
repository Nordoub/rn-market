import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ListingDetailsScreen;
