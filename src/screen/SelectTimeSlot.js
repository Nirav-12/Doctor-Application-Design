import React from "react";
import { View, StatusBar, Text } from "react-native";

import DoctorCard from "../comp/DoctorCard";
import BookingTimeSlot from "../comp/BookingTimeSlot";

import TimeCard from "../comp/TimeCard";

import NeedHelp from "../comp/NeedHelp";
import Header from "../comp/Header";

const SelectTimeSlot = () => {
  return (
    <View>
      <StatusBar hidden={true} />

      <View style={{ backgroundColor: "white" }}>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <DoctorCard />
        </View>

        <View style={{ backgroundColor: "#fafafa", marginTop: 3 }}>
          <BookingTimeSlot />
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text style={{ fontWeight: "600" }}>Morning</Text>
        </View>

        <View>
          <TimeCard />
        </View>

        <View style={{ marginTop: 10, marginHorizontal: 15 }}>
          <NeedHelp />
        </View>
      </View>
    </View>
  );
};
export default SelectTimeSlot;
