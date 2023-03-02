import React, { useEffect, useState, useMemo } from "react";
import { View } from "react-native";
import RatingButton from "./RatingButton";

const RatingBar = () => {
  let [rate, setRate] = useState(-1);

  const array = useMemo(() => [...Array(5).keys()], []);

  return (
    <View style={{ flexDirection: "row" }}>
      {array.map((index) => (
        <RatingButton
          key={index}
          isTrue={rate < index}
          onclick={() =>
            rate == 0 && index == 0 ? setRate(-1) : setRate(index)
          }
        />
      ))}
    </View>
  );
};

export default RatingBar;
