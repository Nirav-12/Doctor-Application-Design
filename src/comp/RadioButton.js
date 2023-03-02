import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

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

const RadioButton = (props) => {
  const [radio, setRadio] = useState(null);

  useEffect(() => {
    if (radio) props.setButton();
  }, [radio]);

  return (
    <View style={{ marginHorizontol: 15, alignItems: "center" }}>
      {data.map((val, index) => (
        <RadioButtonComp
          val={val}
          key={index}
          onClick={() => setRadio(index)}
          isTrue={radio == index}
        />
      ))}
    </View>
  );
};

export default RadioButton;

const RadioButtonComp = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        paddingVertical: 10,
        flexDirection: "row",
        width: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => props.onClick()}
        style={{ marginRight: 10 }}
      >
        <FontAwesome
          name={props.isTrue ? "circle" : "circle-thin"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Text>{props.val.label}</Text>
    </View>
  );
};
