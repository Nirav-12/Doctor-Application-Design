import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RateDisplayIcon = (props) => {
  return (
    <View>
      {props.isTrue ? (
        <Ionicons name="heart-sharp" size={props.size} color="red" />
      ) : props.isDecimal ? (
        <Ionicons name="heart-half-sharp" size={props.size} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={props.size} color="red" />
      )}
    </View>
  );
};

export default RateDisplayIcon;
