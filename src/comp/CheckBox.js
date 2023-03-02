import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <View>
      <View style={[{ height: 20, width: 20, borderWidth: 1 }]}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={{ height: 18, width: 18 }}
        >
          {isChecked && (
            <View style={{ backgroundColor: "#108FE5", height: 18 }}>
              <Ionicons
                name="checkmark"
                size={15}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckBox;
