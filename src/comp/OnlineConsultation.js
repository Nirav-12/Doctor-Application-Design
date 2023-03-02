import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const OnlineConsultation = () => {
  return (
    <View style={{ backgroundColor: "#e9f3ff", paddingVertical: 5 }}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <FontAwesome
          name="video-camera"
          size={20}
          color="#108FE5"
          style={{ marginLeft: 15, marginRight: 5 }}
        />
        <Text style={{ fontSize: 17 }}>Online Consultation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnlineConsultation;
