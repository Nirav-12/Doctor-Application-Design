import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Promise = () => {
  return (
    <View
      style={{
        height: 250,
        borderRadius: 10,
        borderColor: "#108FE5",
        borderWidth: 1,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 2,
          backgroundColor: "#e9f3ff",
          borderTopLeftRadius: 10,
          borderTopEndRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="checkmark-circle"
          size={24}
          color="#108FE5"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#108FE5" }}>
          Zenonco.io Promise
        </Text>
      </View>
      <View style={{ flex: 3, flexDirection: "row", marginTop: 15 }}>
        <Ionicons
          name="checkmark-sharp"
          size={26}
          color="#108FE5"
          style={{ marginHorizontal: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            30 minutes wait time
          </Text>
          <Text>
            We commit to 30 minutes or lesser wait {"\n"}time at the clinic.
          </Text>
        </View>
      </View>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <Ionicons
          name="checkmark-sharp"
          size={26}
          color="#108FE5"
          style={{ marginHorizontal: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            No extra charge
          </Text>
          <Text>
            We assure you that the clinic will not {"\n"}charge you more than
            what is promised {"\n"}on ZenOnco.io
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Promise;
