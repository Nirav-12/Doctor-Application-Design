import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TimeSlot from "./TimeSlot";

const TimeSlotAlign = () => {
  let [slot, setSlot] = useState(false);

  return (
    <View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          backgroundColor: "#fafafa",
        }}
      >
        <TimeSlot slot={slot} />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <View>
          <TouchableOpacity
            style={{ marginVertical: 5, alignItems: "center" }}
            onPress={() => setSlot(!slot)}
          >
            <Text style={{ color: "#108FE5" }}>
              {slot ? "Hide slots" : "View all Slots"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TimeSlotAlign;
