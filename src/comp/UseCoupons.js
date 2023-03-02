import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const UseCoupons = () => {
  return (
    <View
      style={{
        height: 45,
        backgroundColor: "#e9f3ff",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <FontAwesome5
          name="percentage"
          size={24}
          color="#108FE5"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={{ fontSize: 18 }}>Use coupons</Text>
      </View>

      <FontAwesome
        name="angle-right"
        size={24}
        color="black"
        style={{ marginRight: 10 }}
      />
    </View>
  );
};

export default UseCoupons;
