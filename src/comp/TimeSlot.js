import { FlatList, TouchableOpacity, View } from "react-native";
import TimeButton from "./TimeButton";
import { TimeData } from "../Data/TimeData";
import { useNavigation } from "@react-navigation/native";

const TimeSlot = (props) => {
  const navigation = useNavigation();

  let slot = props.slot;

  return (
    <View style={{ alignItems: "center" }}>
      {slot ? (
        <FlatList
          listKey={(index) => index.toString()}
          key="vertical"
          data={TimeData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BookAppointment")}
            >
              <TimeButton time={item.time} />
            </TouchableOpacity>
          )}
          style={{ marginVertical: 10 }}
          numColumns={3}
        />
      ) : (
        <FlatList
          key="horizontal"
          listKey={(index) => {
            index.toString();
          }}
          data={TimeData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BookAppointment")}
            >
              <TimeButton time={item.time} />
            </TouchableOpacity>
          )}
          horizontal
          style={{ marginVertical: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TimeSlot;
