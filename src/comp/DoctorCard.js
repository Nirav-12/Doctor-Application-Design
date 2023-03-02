import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Foundation, FontAwesome, Ionicons } from "@expo/vector-icons";
import PopupMenu from "../comp/PopupMenu";

const DoctorCard = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/image/doctor.jpg")}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
        </View>
        <View>
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Foundation name="heart" size={20} color="red" />
            <Text style={{ color: "gray" }}>4.5</Text>
            <Ionicons
              name="chatbubble-ellipses"
              size={18}
              color="#108FE5"
              style={{ marginLeft: 15 }}
            />
            <Text style={{ color: "#108FE5" }}> 200 reviews</Text>
          </View>
        </View>

        <PopupMenu />
      </View>
    </View>
  );
};

export default DoctorCard;
