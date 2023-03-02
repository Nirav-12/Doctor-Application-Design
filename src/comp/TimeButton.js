import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TimeButton = (props) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{props.time}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#108FE5",
    height: 35,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginHorizontal: 10,
  },
  text: {},
});

export default TimeButton;
