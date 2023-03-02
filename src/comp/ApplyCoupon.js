import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ApplyCoupon = () => {
  return (
    <View style={{ height: 143 }}>
      <Text
        style={{
          fontSize: 22,
          includeFontPadding: false,
          color: "#108FE5",
          fontWeight: "700",
        }}
      >
        Zen
        <Text style={{ color: "#19CEAB" }}>Onco</Text>
        .io
      </Text>
      <Text style={{ includeFontPadding: false, fontSize: 15 }}>
        Get 20% OFF up to `50
      </Text>
      <Text>Valid on total value of items worth `150 or more</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 99,
            height: 30,
            backgroundColor: "#E9F3FF",
            borderWidth: 1,
            borderColor: "#108FE5",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dashed",
          }}
        >
          <Text style={{ color: "#108FE5", fontWeight: "600" }}> ZEN0123</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#108FE5" }}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ color: "#0C8A12" }}>
          You will save `150 more to apply this offer
        </Text>
      </View>
    </View>
  );
};

export default ApplyCoupon;
