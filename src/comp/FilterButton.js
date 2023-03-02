import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const FilterButton = (props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <TouchableOpacity
        style={props.val == props.title ? styles.buttonOn : styles.buttonOff}
        onPress={() => {
          props.click();
        }}
      >
        <Text style={{ color: props.val == props.title ? "#329fe9" : "black" }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOn: {
    height: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9f3ff",
    borderRadius: 15,
  },
  buttonOff: {
    height: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#e9f3ff",
    // borderRadius: 15,
  },
});

export default FilterButton;
