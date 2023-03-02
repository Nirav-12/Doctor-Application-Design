import React, { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";

const ReviewMenu = () => {
  return (
    <Menu>
      <MenuTrigger style={{ width: 20 }}>
        <Entypo name="dots-three-vertical" size={20} color="gray" />
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          width: 100,
          marginLeft: -17,
          height: 80,
          borderRadius: 7,
        }}
      >
        <MenuOption>
          <TouchableOpacity style={styles.button}>
            <Text>Helpful</Text>
          </TouchableOpacity>
        </MenuOption>
        <MenuOption>
          <TouchableOpacity style={styles.button}>
            <Text>Report</Text>
          </TouchableOpacity>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default ReviewMenu;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    height: 30,
    justifyContent: "center",
  },
});
