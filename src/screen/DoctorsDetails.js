import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import DoctorCard from "../comp/DoctorCard";

import TimeSlot from "../comp/TimeSlot";
import { ServiceData } from "../Data/ServiceData";
import About from "../comp/About";
import CollapseCardParent from "../comp/CollapseCardParent";
import BookingTimeSlot from "../comp/BookingTimeSlot";
import NeedHelp from "../comp/NeedHelp";
import Reviews from "../comp/Reviews";
import Benefits from "../comp/Benefits";
import { DocDetailCollapse } from "../Data/DocDetailCollapse";
import Header from "../comp/Header";

const DoctorsDetails = () => {
  let [slot, setSlot] = useState(false);
  let [expand, setExpand] = useState(false);
  let [about, setAbout] = useState(true);
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

              <View>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  If you are a Doctor and interested to learn more about
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    the Zen Care Services
                  </Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 12, color: "#108FE5" }}>
                      Click Here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#e9f3ff",
                height: 30,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="video-camera"
                size={20}
                color="#108FE5"
                style={{ marginLeft: 15, marginRight: 5 }}
              />
              <Text style={{ fontSize: 16 }}>Online Consultation</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 3 }}></View>
            <View style={{ backgroundColor: "#fafafa" }}>
              <BookingTimeSlot />
            </View>
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
                <FlatList
                  key="services"
                  data={ServiceData}
                  renderItem={({ item, index }) =>
                    !expand ? (
                      index < 2 ? (
                        <Text style={{ fontSize: 15 }}>• {item.service}</Text>
                      ) : index == 2 ? (
                        <View style={{ flexDirection: "row" }}>
                          <Text>• {item.service}</Text>

                          <TouchableOpacity
                            style={{ flex: 1, alignItems: "flex-end" }}
                            onPress={() => {
                              setExpand(true);
                            }}
                          >
                            <Text style={{ color: "#108FE5" }}>See more</Text>
                          </TouchableOpacity>
                        </View>
                      ) : null
                    ) : index != ServiceData.length - 1 ? (
                      <Text style={{ fontSize: 15 }}>• {item.service}</Text>
                    ) : (
                      <View style={{ flexDirection: "row" }}>
                        <Text>• {item.service} </Text>
                        <TouchableOpacity
                          onPress={() => setExpand(false)}
                          style={{ alignItems: "flex-end", flex: 1 }}
                        >
                          <Text style={{ color: "#108FE5" }}> See less</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                />
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
                <About click={() => setAbout(!about)} curr={about} />
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
