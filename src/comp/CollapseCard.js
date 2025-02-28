import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CollapseCard = (props) => {
  return (
    <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
      <TouchableOpacity onPress={() => props.onclick()}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginVertical: 15,
              fontSize: 17,
              width: 290,
            }}
            numberOfLines={1}
          >
            {props.header}
          </Text>

          <FontAwesome
            name={props.isOpen ? "angle-down" : "angle-right"}
            size={30}
            color="black"
          />
        </View>
      </TouchableOpacity>
      {props.isOpen && (
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: "#666666" }}>{props.para}</Text>
        </View>
      )}
    </View>
  );
};

export default CollapseCard;
