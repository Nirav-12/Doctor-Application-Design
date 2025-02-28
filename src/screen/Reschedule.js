import React from "react";
import { View, StatusBar, Text, DatePickerIOSComponent } from "react-native";

import DoctorCard from "../comp/DoctorCard";
import BookingTimeSlot from "../comp/BookingTimeSlot";
import { Feather } from "@expo/vector-icons";

import NeedHelp from "../comp/NeedHelp";
import TimeSlot from "../comp/TimeSlot";

const Reschedule = () => {
  let date = new Date();
  let hour =
    date.getHours() % 12 < 10
      ? `0${date.getHours() % 12}`
      : date.getHours() % 12;
  let minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let meridiem = date.getHours() <= 12 ? "AM" : "PM";
  return (
    <View>
      <StatusBar hidden={true} />

      <View style={{ backgroundColor: "white" }}>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <DoctorCard />
        </View>

        <View
          style={{
            marginHorizontal: 15,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}>Existing and time</Text>
          <Text style={{ fontWeight: "600" }}>
            {date.toString().slice(0, 10)} | {hour}:{minute} {meridiem}
          </Text>
        </View>

        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text style={{ fontWeight: "600" }}>
            Select a time slot for online consultation
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="check" size={22} color="green" />
            <Text> Get instant confirmation for FREE!</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#fafafa", marginTop: 3 }}>
          <BookingTimeSlot />
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>Morning</Text>
        </View>

        <View>
          <TimeSlot slot />
        </View>

        <View style={{ marginTop: 10, marginHorizontal: 15 }}>
          <NeedHelp />
        </View>
      </View>
    </View>
  );
};
export default Reschedule;
