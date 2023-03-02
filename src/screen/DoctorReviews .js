import { View, Text, ScrollView } from "react-native";
import React from "react";
import RateDisplay from "../comp/RateDisplay";
import ReviewCard from "../comp/ReviewCard";
import { ReviewData } from "../Data/ReviewData";
import ReviewMenu from "../comp/ReviewMenu";

const DoctorReviews = () => {
  let rate = 4.5;

  return (
    <View>
      <View
        style={{
          backgroundColor: "lightgray",
          paddingVertical: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RateDisplay rate={rate} size={22} />
        <Text>{rate} out of 5</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <ScrollView>
          {ReviewData.map((object, index) => (
            <View key={index} style={{ margin: 10, flexDirection: "row" }}>
              <ReviewCard data={object} />
              <ReviewMenu />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorReviews;
