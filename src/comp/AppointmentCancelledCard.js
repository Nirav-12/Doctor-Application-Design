import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AppointmentCancelledCard = () => {
  return (
    <View style={{ backgroundColor: "#ffcfd1", padding: 15, borderRadius: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          name="calendar"
          size={24}
          color="red"
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: "red", fontWeight: "500", fontSize: 19 }}>
          Appointment Cancelled
        </Text>
      </View>
      <View>
        <Text>
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
        </Text>
      </View>
    </View>
  );
};

export default AppointmentCancelledCard;
