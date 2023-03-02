import { View, Text } from "react-native";
import React from "react";
import RateDisplayIcon from "./RateDisplayIcon";

const RateDisplay = (props) => {
  const array = [...Array(5).keys()];
  return (
    <View style={{ flexDirection: "row" }}>
      {array.map((index) => (
        <RateDisplayIcon
          key={index}
          isTrue={props.rate > index + 1}
          isDecimal={props.rate % 1 && props.rate + 0.5 >= index + 1}
          size={props.size}
        />
      ))}
    </View>
  );
};

export default RateDisplay;
