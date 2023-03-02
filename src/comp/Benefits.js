import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Benefits = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 3,
        alignItems: "baseline",
      }}
    >
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={22}
        color="#108FE5"
        style={{ marginRight: 10 }}
      />
      <Text style={{ fontSize: 15 }}>{props.text}</Text>
    </View>
  );
};

export default Benefits;
