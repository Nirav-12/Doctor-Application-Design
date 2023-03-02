import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const NeedHelp = () => {
  return (
    <View>
      <View
        style={{
          height: 90,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <View>
          <Text>Need Help?</Text>
          <Text>
            In case of any issue, talk or {"\n"}whatsapp to our customer
            support.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        >
          <TouchableOpacity>
            <Feather
              name="phone-call"
              size={24}
              color="#108FE5"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign
              name="message1"
              size={24}
              color="#108FE5"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default NeedHelp;
