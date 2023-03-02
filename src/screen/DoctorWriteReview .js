import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

import RatingBar from "../comp/RatingBar";

const DoctorWriteReview = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text>Your Rating : </Text>
          <RatingBar />
        </View>
        <View style={styles.reviewInput}>
          <TextInput placeholder="Write review" />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{ color: "white", fontWeight: "700" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorWriteReview;

const styles = StyleSheet.create({
  reviewInput: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 50,
    marginTop: 40,
  },
  submitButton: {
    backgroundColor: "#108FE5",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
