import { View, Text, ScrollView } from "react-native";
import React from "react";
import RateDisplay from "../comp/RateDisplay";
import ReviewCard from "../comp/ReviewCard";
import { ReviewData } from "../Data/ReviewData";
import ReviewMenu from "../comp/ReviewMenu";

const DoctorReviews = () => {
  let rate = 4.5;

  return (
    <View style={{ flex: 1 }}>
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

      <ScrollView>
        {ReviewData.map((object, index) => (
          <View
            key={index}
            style={{
              margin: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              padding: 13,
            }}
          >
            <ReviewCard data={object} />
            <ReviewMenu />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DoctorReviews;
