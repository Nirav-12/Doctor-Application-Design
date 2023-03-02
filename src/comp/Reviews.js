import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { ReviewData } from "../Data/ReviewData";
import Carousel from "react-native-new-snap-carousel";
import ReviewCard from "../comp/ReviewCard";

const Reviews = () => {
  return (
    <View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "gray",
          marginHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 20, marginVertical: 10 }}>Reviews</Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          These stories represent patient options and exprinece. They do not
          reflect the doctor's medical capabilityes.
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "gray",
          height: 60,
          flex: 1,
        }}
      >
        <View
          style={{
            width: 80,
            marginVertical: 5,
            borderRightWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={24} color="red" />
          <Text style={{ marginLeft: 10, fontSize: 20 }}>97%</Text>
        </View>
        <View
          style={{
            width: 225,
            paddingHorizontal: 10,
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text>
            Out of 224 patient who were surveyed, 97% of them recommend visitng
            this doctor
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Fontisto name="angle-right" size={18} color="black" />
        </View>
      </View>
      <View
        style={{
          marginVertical: 15,
          marginHorizontal: 15,
          alignItems: "center",
        }}
      >
        <Carousel
          data={ReviewData}
          renderItem={({ item }) => <ReviewCard data={item} />}
          itemWidth={330}
          sliderWidth={330}
        />
      </View>
    </View>
  );
};

export default Reviews;
