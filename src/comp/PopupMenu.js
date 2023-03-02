import React, { View, TouchableOpacity, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";

const PopupMenu = () => {
  return (
    <Menu>
      <MenuTrigger style={{ width: 20 }}>
        <Entypo name="dots-three-vertical" size={18} color="gray" />
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          width: 100,
          marginLeft: -17,
          marginTop: 2,
        }}
        style={{}}
      >
        <MenuOption>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="bookmark"
                size={20}
                color="black"
                style={{ marginRight: 10 }}
              />

              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        </MenuOption>
        <MenuOption>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="share"
                size={20}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Share</Text>
            </View>
          </TouchableOpacity>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default PopupMenu;
