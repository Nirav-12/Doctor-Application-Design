import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import UpcomingAppointments from "./UpcomingAppointments ";
import PastAppointments from "./PastAppointments ";

const Tab = createMaterialTopTabNavigator();

const MyAppointment = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={UpcomingAppointments} />
      <Tab.Screen name="Past" component={PastAppointments} />
    </Tab.Navigator>
  );
};

export default MyAppointment;
