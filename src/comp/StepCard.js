import { View, Text } from "react-native";
import React from "react";

const StepCard = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 20,
            // borderWidth: 1,
            width: 20,
            borderRadius: 10,
            backgroundColor: props.reached ? "#108FE5" : "white",
          }}
        ></View>
        {!(props.val.step == 4) && (
          <View
            style={{
              height: 40,
              borderWidth: 1,
              width: 1,
              borderColor: props.reached ? "#108FE5" : "black",
            }}
          ></View>
        )}
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "500" }}>Step {props.val.step}</Text>
        <Text>ZenOnco.io Care Benefits ZenOnco.io Care provides Benefits</Text>
      </View>
    </View>
  );
};

export default StepCard;
