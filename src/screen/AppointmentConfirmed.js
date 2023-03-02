import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import DoctorCard from "../comp/DoctorCard";
import OnlineConsultation from "../comp/OnlineConsultation";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import KnowMore from "../comp/KnowMore";
import NeedHelp from "../comp/NeedHelp";
import * as ImagePicker from "expo-image-picker";

const AppointmentConfirmed = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const GetImage = async () => {
    let response = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    if (!response.canceled) {
      setImage(response.assets[0].uri);
    }
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", paddingTop: 10 }}>
        <View style={{ alignItems: "center" }}>
          <DoctorCard />
        </View>
        <View style={{ marginTop: 10, width: "100%" }}>
          <OnlineConsultation />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 10 }}
        >
          <AntDesign
            name="clockcircleo"
            size={18}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "gray" }}>Appointment time</Text>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 15 }}>
            Tue, Feb 28 | 11:33 AM
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <AntDesign
              name="checkcircle"
              size={15}
              color="#108FE5"
              style={{ marginRight: 5 }}
            />
            <Text>Book for - Chandu Patil</Text>
          </View>
          <KnowMore />
          <View style={{ marginTop: 10 }}>
            <NeedHelp />
          </View>
          <View style={{ marginTop: 15, marginBottom: 10 }}>
            <Text style={{ fontSize: 13 }}>
              In case your cannot make it for the appointment please cancel or
              reschedule the appointment preferably 2 hours before the scheduled
              time
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Reschedule")}
          >
            <MaterialCommunityIcons
              name="calendar-clock"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 17 }}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginBottom: 10,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AppointmentCancellation")}
          >
            <MaterialCommunityIcons
              name="cancel"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 17 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text style={{ fontSize: 17 }}>Booking Details</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            justifyContent: "space-between",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
        >
          <View>
            <Text>Patient</Text>
            <Text style={{ fontSize: 18 }}>Chandu patil </Text>
            <Text>+91 90000008090</Text>
            <Text>cahndu@gmail.com</Text>
          </View>
          <View>
            <View
              style={{
                borderWidth: 1,
                height: 70,
                width: 70,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!image ? (
                <AntDesign name="user" size={24} color="black" />
              ) : (
                <Image
                  source={{ uri: image }}
                  style={{ height: 70, width: 70, borderRadius: 35 }}
                />
              )}
            </View>

            <TouchableOpacity onPress={() => GetImage()}>
              <Text style={{ color: "#108FE5" }}>+ Add photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <Text style={{ fontSize: 20, color: "gray" }}>Appointment id</Text>

            <Text style={{ fontSize: 20, marginLeft: 20 }}>453455</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, color: "gray" }}>Appointment fee</Text>

            <Text style={{ fontSize: 20, marginLeft: 20 }}>₹ 6,999</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AppointmentConfirmed;
