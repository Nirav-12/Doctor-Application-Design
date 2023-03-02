import { View, Text } from "react-native";
import React, { useState } from "react";
import CollapseCard from "../comp/CollapseCard";

const CollapseCardParent = (props) => {
  let [open, setOpen] = useState(null);

  return (
    <View
      style={{
        marginHorizontal: 15,
      }}
    >
      {props.data.map((val, index) => (
        <CollapseCard
          key={index}
          header={val.header}
          para={val.para}
          onclick={() => {
            open == index ? setOpen(null) : setOpen(index);
          }}
          isOpen={index == open ? true : false}
        />
      ))}
    </View>
  );
};

export default CollapseCardParent;
