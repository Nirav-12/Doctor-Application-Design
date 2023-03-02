import React, { useState } from "react";
import { View, Text } from "react-native";

const About = ({ curr, click }) => {
  let [cut, setCut] = useState(null);

  let text =
    "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <View>
      {curr ? (
        <Text
          onTextLayout={(event) => {
            let { lines } = event.nativeEvent;
            let abc = lines
              .splice(0, 3)
              .map((obj) => obj.text)
              .join("");
            setCut(abc.substr(0, abc.length - 12));
          }}
        >
          {text}
          <Text style={{ color: "#108FE5" }} onPress={() => click()}>
            See less
          </Text>
        </Text>
      ) : (
        <Text>
          {cut}{" "}
          <Text style={{ color: "#108FE5" }} onPress={() => click()}>
            See more
          </Text>
        </Text>
      )}
    </View>
  );
};
export default About;
