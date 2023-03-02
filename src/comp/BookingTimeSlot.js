import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";

import Date from "../comp/Date";
import { DateData } from "../Data/Date";

const BookingTimeSlot = () => {
  let [date, setDate] = useState("Today");

  return (
    <View>
      <StatusBar hidden={true} />
      <FlatList
        data={DateData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(obj) => (
          <Date
            text={obj.item}
            onclick={() => setDate(obj.item)}
            select={date}
          />
        )}
      />
    </View>
  );
};
export default BookingTimeSlot;
