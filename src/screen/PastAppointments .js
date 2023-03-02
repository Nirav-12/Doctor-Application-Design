import { View, Text } from "react-native";
import React from "react";
import AppointmentCard from "../comp/AppointmentCard";

const PastAppointments = () => {
  return (
    <View>
      <AppointmentCard isCancelled />
    </View>
  );
};

export default PastAppointments;
