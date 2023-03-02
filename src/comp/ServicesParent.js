import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ServiceData } from "../Data/ServiceData";

const ServicesParent = () => {
  let [expand, setExpand] = useState(false);

  return (
    <View>
      <FlatList
        key="services"
        data={ServiceData}
        renderItem={({ item, index }) =>
          !expand ? (
            index < 2 ? (
              <Text style={{ fontSize: 15 }}>• {item.service}</Text>
            ) : index == 2 ? (
              <View style={{ flexDirection: "row" }}>
                <Text>• {item.service}</Text>

                <TouchableOpacity
                  style={{ flex: 1, alignItems: "flex-end" }}
                  onPress={() => {
                    setExpand(true);
                  }}
                >
                  <Text style={{ color: "#108FE5" }}>See more</Text>
                </TouchableOpacity>
              </View>
            ) : null
          ) : index != ServiceData.length - 1 ? (
            <Text style={{ fontSize: 15 }}>• {item.service}</Text>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text>• {item.service} </Text>
              <TouchableOpacity
                onPress={() => setExpand(false)}
                style={{ alignItems: "flex-end", flex: 1 }}
              >
                <Text style={{ color: "#108FE5" }}> See less</Text>
              </TouchableOpacity>
            </View>
          )
        }
      />
    </View>
  );
};

export default ServicesParent;
