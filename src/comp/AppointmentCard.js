import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import PopupMenu from "../comp/PopupMenu";

const AppointmentCard = ({ isCancelled }) => {
  return (
    <View style={{ margin: 10, borderWidth: 1, borderRadius: 10 }}>
      {isCancelled && (
        <View style={styles.cancel}>
          <AntDesign
            name="calendar"
            size={24}
            color="red"
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          <Text style={{ color: "red", fontWeight: "500" }}>
            Appointment Cancelled
          </Text>
        </View>
      )}
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Image
              source={require("../../assets/image/doctor.jpg")}
              style={{ height: 70, width: 70, borderRadius: 10 }}
            />
          </View>
          <View>
            <Text>Mon, Sept 10 | 10:18 AM</Text>
            <Text style={{ fontWeight: "bold" }}>Dr Sanjay Deshpande</Text>
            <Text style={{ color: "gray", fontWeight: "600" }}>
              Onco Nutrition
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/experience.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ color: "gray" }}>12 years experience</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="graduation-cap" size={15} color="black" />
              <Text style={{ color: "gray" }}>
                Bachelor's Degree in Nutrition
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end", marginLeft: 20 }}>
            <PopupMenu />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Feather name="user" size={17} color="black" />
            <Text>Booked by akshay</Text>
          </View>

          <TouchableOpacity
            style={{
              height: 35,
              backgroundColor: "#108FE5",
              paddingHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              {isCancelled ? "Book Again" : "View Details"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  cancel: {
    backgroundColor: "#ffcfd1",
    height: 35,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
