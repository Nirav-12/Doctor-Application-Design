import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

const RadioButton = (props) => {
  const [radio, setRadio] = useState(null);
  // console.log(props);

  useEffect(() => {
    if (props.setButton && radio) props.setButton();
  }, [radio]);

  return (
    <View style={{ marginHorizontol: 15, alignItems: "center" }}>
      {props.data.map((val, index) => (
        <RadioButtonComp
          val={val}
          key={index}
          onClick={() => setRadio(index)}
          isTrue={radio == index}
          border={props.border}
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
        borderWidth: props.border ? 1 : 0,
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
