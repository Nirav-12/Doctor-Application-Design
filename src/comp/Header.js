import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: "white",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity style={{ paddingHorizontal: 7 }}>
          <FontAwesome name="angle-left" size={28} color="black" />
        </TouchableOpacity> */}

        {props.title && (
          <Text
            style={{
              fontSize: 20,
              marginLeft: props.center ? 115 : 0,
              color: props.color,
            }}
          >
            {props.title}
          </Text>
        )}
      </View>

      {props.icon && (
        <TouchableOpacity onPress={props.iconPress ?? null}>
          <AntDesign
            name={props.icon}
            size={22}
            color="gray"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
