import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const KnowMore = () => {
  return (
    <View
      style={{
        height: 42,
        backgroundColor: "lightgray",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 12 }}>
        Free cancellation before 29 Jul, 6:20 PM
      </Text>
      <TouchableOpacity>
        <Text style={{ textDecorationLine: "underline", color: "#108FE5" }}>
          Know more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default KnowMore;
