import { View, Text } from "react-native";
import React, { useState } from "react";
import About from "./About";

const AboutParent = () => {
  let [about, setAbout] = useState(true);
  return (
    <View>
      <About click={() => setAbout(!about)} curr={about} />
    </View>
  );
};

export default AboutParent;
