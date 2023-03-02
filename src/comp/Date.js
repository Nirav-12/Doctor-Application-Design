import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Date = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={props.text == props.select ? styles.buttonOn : styles.button}
        onPress={() => props.onclick()}
      >
        <Text style={props.text == props.select ? styles.textOn : styles.text}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  buttonOn: {
    borderColor: "#108FE5",
    borderBottomWidth: 1,
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textOn: {
    color: "#108FE5",
  },
  button: {
    borderColor: "gray",
    borderBottomWidth: 1,
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
