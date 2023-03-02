import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Benefits from "../comp/Benefits";
import StepCard from "../comp/StepCard";
import CollapseCardParent from "../comp/CollapseCardParent";
import RadioButton from "../comp/RadioButton";
import { CollapseData, RadioData, stepsData } from "../Data/InfoData";

const Info = () => {
  const [step, setStep] = useState(2);

  return (
    <View>
      <StatusBar hidden={true} />
      <ScrollView>
        <LinearGradient
          colors={["#108FE5", "#1092E2", "#19CEAB"]}
          start={{ x: 0.5, y: 0.4021 }}
          end={{ x: 1, y: 1 }}
          location={[0, 0.0542, 1]}
        >
          <View
            style={{
              height: 220,
              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                includeFontPadding: false,
              }}
            >
              ZenOnco.io
            </Text>

            <Text
              style={{
                color: "white",
                fontSize: 50,
                fontWeight: "300",
                includeFontPadding: false,
              }}
            >
              Care
            </Text>

            <Text style={{ color: "white", marginTop: 10 }}>
              Hassle-free experience
            </Text>
            <Text style={{ color: "white" }}>from cancer to recovery</Text>
          </View>
        </LinearGradient>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 17, marginVertical: 15 }}>
            ZenOnco.io Care Benefits
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: "gray",
            }}
          >
            <Benefits text="abcd" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: "gray",
            }}
          >
            <Benefits text="abcd" />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: "gray",
            }}
          >
            <Benefits text="abcd" />
          </View>

          <Text style={{ fontSize: 19, marginVertical: 10 }}>
            Why ZenOnco.io Care?
          </Text>
          <Image
            source={require("../../assets/image/Info.png")}
            style={{
              width: "100%",
              height: 230,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Text style={{ width: "100%" }}>
            ZenOnco.io Care BenefitsZenOnco.io Care BenefitsZenOnco.io Care
            Benefits
          </Text>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <RadioButton data={RadioData} />
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>How it work</Text>
          <Text>
            ZenOnco.io Care BenefitsZenOnco.io Care Bene fitse nOnco.io Care
            Benefits
          </Text>
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
          {stepsData.map((val, index) => (
            <StepCard val={val} key={index} reached={step > index} />
          ))}
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 19 }}>Frequently Asked Questions</Text>
        </View>
        <View>
          <CollapseCardParent data={CollapseData} />
        </View>
        <Text style={{ marginHorizontal: 15, marginTop: 20, marginBottom: 80 }}>
          If you are a Doctor and interested to learn more about the ZenOnco.io
          care Surgeries
          <Text style={{ color: "#108FE5" }}> Click Here</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default Info;
