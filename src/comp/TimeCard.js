import { FlatList, View } from "react-native";
import TimeButton from "./TimeButton";

const TimeCard = (props) => {
  let data = [
    { time: "09:00 AM" },
    { time: "09:30 AM" },
    { time: "09:45 AM" },
    { time: "10:00 AM" },
    { time: "10:15 AM" },
    { time: "10:30 AM" },
    { time: "10:45 AM" },
    { time: "11:00 AM" },
    { time: "11:15 AM" },
  ];
  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        listKey={(index) => index.toString()}
        key="vertical"
        data={data}
        renderItem={({ item }) => <TimeButton time={item.time} />}
        style={{ marginVertical: 10 }}
        numColumns={3}
      />
    </View>
  );
};

export default TimeCard;
