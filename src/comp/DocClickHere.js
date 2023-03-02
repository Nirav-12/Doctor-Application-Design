import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const DocClickHere = () => {
  return (
    <View>
      <Text style={{ fontSize: 12, color: "gray" }}>
        If you are a Doctor and interested to learn more about
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 12, color: "gray" }}>
          the Zen Care Services
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 12, color: "#108FE5" }}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocClickHere;
