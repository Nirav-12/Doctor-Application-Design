import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useRef, useCallback } from "react";

const EditPatientDetails = () => {
  const sheetRef = useRef(null);
  const snapPoints = ["60%"];

  const openModal = () => {
    sheetRef.current.present();
  };
  const closeModal = () => {
    sheetRef.current.close();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <View>
        <Text>EditPatientDetails</Text>
        <TouchableOpacity onPress={() => openModal()}>
          <Text>open Modal</Text>
        </TouchableOpacity>
      </View>

      <BottomSheetModal
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <View style={{ marginHorizontal: 30, marginTop: 30, marginBottom: 30 }}>
          <Text style={{ fontSize: 20 }}>Update Patient Details</Text>
          <TextInput placeholder="Your Name" style={styles.textInput} />
          <TextInput placeholder="Enter number here" style={styles.textInput} />
          <TextInput placeholder="Email ID" style={styles.textInput} />
          <TouchableOpacity
            onPress={() => closeModal()}
            style={{
              marginTop: 40,
              width: "100%",
              backgroundColor: "#108FE5",
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default EditPatientDetails;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 24,
    borderBottomWidth: 1,
    height: 37,
    fontSize: 18,
    borderColor: "gray",
  },
});
