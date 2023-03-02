import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ApplyCoupon from "../comp/ApplyCoupon";
import { FontAwesome5 } from "@expo/vector-icons";

const Coupons = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ color: "#666666" }}>Enter Coupon Code</Text>
        <TouchableOpacity>
          <Text style={{ color: "#108FE5" }}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 44,
          backgroundColor: "#E9F3FF",
          marginVertical: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="percentage"
          size={24}
          color="#108FE5"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={{ fontSize: 18 }}>Available coupons</Text>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          alignItems: "center",
        }}
      >
        <ApplyCoupon />
      </View>
    </View>
  );
};

export default Coupons;
