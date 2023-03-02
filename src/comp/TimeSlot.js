import { FlatList, View } from "react-native";
import TimeButton from "./TimeButton";

const TimeSlot = (props) => {
  let slot = props.slot;
  let data = [
    { time: "09:00 AM" },
    { time: "09:30 AM" },
    { time: "10:00 AM" },
    { time: "10:30 AM" },
    { time: "11:00 AM" },
    { time: "11:30 AM" },
  ];
  return (
    <View style={{ alignItems: "center" }}>
      {slot ? (
        <FlatList
          listKey={(index) => index.toString()}
          key="vertical"
          data={data}
          renderItem={({ item }) => <TimeButton time={item.time} />}
          style={{ marginVertical: 10 }}
          numColumns={3}
        />
      ) : (
        <FlatList
          key="horizontal"
          listKey={(index) => {
            index.toString();
          }}
          data={data}
          renderItem={({ item }) => <TimeButton time={item.time} />}
          horizontal
          style={{ marginVertical: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TimeSlot;
