import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, Foundation, FontAwesome } from "@expo/vector-icons";
import PopupMenu from "../comp/PopupMenu";
import { useNavigation } from "@react-navigation/native";

const Card = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "gray",
      }}
    >
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("../../assets/image/doctor.jpg")}
                  style={{ height: 100, width: 100, borderRadius: 10 }}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DoctorsDetails")}
              >
                <View>
                  <Text style={{ fontWeight: "bold" }}>
                    Dr Sanjay Deshpande
                  </Text>
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
                    <FontAwesome
                      name="graduation-cap"
                      size={15}
                      color="black"
                    />
                    <Text style={{ color: "gray" }}>
                      Bachelor's Degree in Nutrition
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Foundation name="heart" size={20} color="red" />
                    <Text style={{ color: "gray" }}>4.5</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <PopupMenu />
          </View>
        </View>
        {/* <DoctorCard /> */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="chatbubble-ellipses" size={20} color="#108FE5" />
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorReviews")}
          >
            <Text style={{ color: "#108FE5" }}> 200 reviews</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 70 }}>
            ₹6,999
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#108FE5",
              padding: 10,
              borderRadius: 6,
              marginHorizontal: 10,
            }}
            onPress={() => navigation.navigate("SelectTimeSlot")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Select Slot
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
