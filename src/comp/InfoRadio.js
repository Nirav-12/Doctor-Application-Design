import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const InfoRadio = (props) => {
  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => props.onClick()}>
          <FontAwesome
            name={props.isTrue ? "circle" : "circle-thin"}
            size={24}
            color={props.isTrue ? "black" : "gray"}
          />
        </TouchableOpacity>

        <Text style={{ marginLeft: 10 }}>{props.val.label}</Text>
      </View>
    </View>
  );
};

export default InfoRadio;
