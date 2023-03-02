import React from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

import DoctorCard from "../comp/DoctorCard";
import CollapseCardParent from "../comp/CollapseCardParent";
import BookingTimeSlot from "../comp/BookingTimeSlot";
import NeedHelp from "../comp/NeedHelp";
import Reviews from "../comp/Reviews";
import Benefits from "../comp/Benefits";
import { DocDetailCollapse } from "../Data/DocDetailCollapse";
import DocClickHere from "../comp/DocClickHere";
import OnlineConsultation from "../comp/OnlineConsultation";
import AboutParent from "../comp/AboutParent";
import ServicesParent from "../comp/ServicesParent";
import TimeSlotAlign from "../comp/TimeSlotAlign";

const DoctorsDetails = ({ navigation }) => {
  return (
    <View>
      <StatusBar hidden={true} />

      <FlatList
        ListHeaderComponent={
          <View style={{ backgroundColor: "white" }}>
            <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
              <DoctorCard />
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                  marginTop: 20,
                  marginBottom: 3,
                }}
              >
                Fullfilled by
              </Text>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text
                  style={{ fontSize: 23, color: "#108FE5", fontWeight: "bold" }}
                >
                  Zen
                  <Text style={{ color: "#1aceab" }}>Onco</Text>
                  .io
                </Text>

                <Text style={{ color: "gray", marginLeft: 8 }}>
                  Assisted experience
                </Text>
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="gray"
                  style={{ marginLeft: 10, alignSelf: "flex-end" }}
                />
              </View>

              <Benefits text="Dedicated personal assistance" />
              <Benefits text="Assistance in insurance claim" />
              <Benefits text="Post-surgery Care and Guidance" />
              <DocClickHere />
            </View>
            <OnlineConsultation />
            <View style={{ backgroundColor: "white", height: 3 }}></View>
            <View style={{ backgroundColor: "#fafafa" }}>
              <BookingTimeSlot />
            </View>

            <TimeSlotAlign />

            <View style={{ marginHorizontal: 15 }}>
              <View style={{ backgroundColor: "gray", height: 1 }} />
              <View style={{ marginTop: 10 }}>
                <NeedHelp />
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                //5502
                borderColor: "gray",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 20, marginVertical: 20 }}>
                Highly Recomnded for
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 10, marginTop: 3 }}>
                  <AntDesign name="hearto" size={20} color="black" />
                </View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Doctor Friendliness
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    87% Patients and the doctor friendly and approachable
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <View style={{ marginRight: 10, marginTop: 3 }}>
                  <MaterialIcons
                    name="mark-chat-read"
                    size={20}
                    color="black"
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Detailed Treatment Explanation
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    87% patients recommend the doctor for in-depth {"\n"}
                    explanation of their health issue
                  </Text>
                </View>
              </View>
            </View>
            <Reviews />
            <View
              style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                marginHorizontal: 15,
                borderColor: "gray",
              }}
            >
              <View>
                <Text style={{ fontSize: 20, marginVertical: 15 }}>
                  Services by Dr Sanjay Deshpande
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <ServicesParent />
              </View>
            </View>
            <View
              style={{
                borderColor: "gray",
                borderBottomWidth: 1,
                marginHorizontal: 15,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, marginVertical: 15 }}>
                  About Dr Sanjay Deshpande
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <AboutParent />
              </View>
            </View>
            <CollapseCardParent data={DocDetailCollapse} />
          </View>
        }
      />
    </View>
  );
};
export default DoctorsDetails;
