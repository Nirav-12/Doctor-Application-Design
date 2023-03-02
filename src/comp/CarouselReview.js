import React from "react";
import { View, Image, Text } from "react-native";

const CarouselReview = (props) => {
  return (
    <View>
      {/* <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <Image
            source={{ uri: `${props.data.image}` }}
            style={{ height: 50, width: 50, borderRadius: 10 }}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {props.data.name}
          </Text>
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 12 }}>
            {props.data.disease}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text>{props.data.date}</Text>
        </View>
      </View> */}

      <Text numberOfLines={3} style={{ width: 310 }}>
        {props.data.review}
      </Text>
    </View>
  );
};

export default CarouselReview;
