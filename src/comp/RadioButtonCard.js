import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RadioButtonCard = () => {
  const navigation = useNavigation();
  let data = [
    {
      value: 0,
      label: "i am busy",
    },
    {
      value: 1,
      label: "forgot about the appointment",
    },
    {
      value: 2,
      label: "Changed my mind ",
    },
    {
      value: 3,
      label: "Visited another doctor",
    },
    {
      value: 4,
      label: "Clinic/Hospital is far",
    },
    {
      value: 5,
      label: "Doctor asked me to cancel",
    },
  ];
  const [isSelect, setSelect] = useState(false);
  return (
    <View>
      <RadioButton setButton={() => setSelect(true)} data={data} border />

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
          onPress={() => navigation.navigate("AppointmentCancelled")}
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
