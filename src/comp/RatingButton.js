import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RatingButton = (props) => {
  return (
    <View style={{ marginLeft: 7 }}>
      <TouchableOpacity onPress={() => props.onclick()}>
        <AntDesign
          name={props.isTrue ? "hearto" : "heart"}
          size={20}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

export default RatingButton;
