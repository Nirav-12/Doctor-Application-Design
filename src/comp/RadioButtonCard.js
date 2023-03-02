import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import { useState } from "react";

const RadioButtonCard = () => {
  const [isSelect, setSelect] = useState(false);
  return (
    <View>
      <RadioButton setButton={() => setSelect(true)} />

      <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            height: 35,
            backgroundColor: isSelect ? "#108FE5" : "gray",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          disabled={!isSelect}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
            Yes ,I want cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioButtonCard;
