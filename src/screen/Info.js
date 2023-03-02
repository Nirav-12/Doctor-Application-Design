import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Benefits from "../comp/Benefits";
import { FontAwesome } from "@expo/vector-icons";
import InfoRadio from "../comp/InfoRadio";
import StepCard from "../comp/StepCard";
import CollapseCardParent from "../comp/CollapseCardParent";

const Info = () => {
  let data = [
    {
      value: 0,
      label: "If you're looking for random paragraphs",
    },
    {
      value: 1,
      label: " you've come to the right place. When",
    },
    {
      value: 2,
      label: "a random word or a random  ",
    },
    {
      value: 3,
      label: "Visited another doctor",
    },
  ];

  let stepsData = [
    {
      step: 1,
    },
    {
      step: 2,
    },
    {
      step: 3,
    },
    {
      step: 4,
    },
  ];

  let CollapseData = [
    {
      header: "How will the relationship manager help me?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur eu tellus in mattis. Duis facilisis nisl quam, at iaculis augue laoreet non. Curabitur nibh nulla, vestibulum et consequat eu, varius id sem. Nam aliquet varius dapibus. Nam ac dolor ac lacus imperdiet",
    },
    {
      header: "Can I consult doctor online?",
      para: "hendrerit id quis turpis. Donec tincidunt mauris dui, eget venenatis nisi tempor id. In aliquam ipsum at enim efficitur tincidunt. Etiam nec nunc a purus semper finibus at ut sem. Cras lacus ex, sagittis at aliquet a, vestibulum vel velit. Donec turpis nulla, laoreet sed tortor id, sagittis suscipit urna. Sed quis porta justo. Ut quis nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      header: "I have insurance, will my surgery expense be covered?",
      para: "Morbi nulla enim, lobortis quis ultrices a, molestie non justo. Vestibulum convallis justo ligula, in tempor eros lacinia quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed venenatis sed turpis vitae semper. Nunc vitae enim fermentum, mollis nulla vel, bibendum est. Praesent sodales urna elit, sed bibendum sem suscipit in. Donec iaculis consectetur odio sit amet",
    },
  ];

  const [radio, setRadio] = useState(null);
  const [step, setStep] = useState(2);

  return (
    <View>
      <StatusBar hidden={true} />
      <ScrollView>
        {/* <LinearGradient colors={["#108FE5", "lightgreen"]} end={{ x: 1, y: 1 }}> */}
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
          {data.map((val, index) => (
            <InfoRadio
              val={val}
              key={index}
              onClick={() => setRadio(index)}
              isTrue={index == radio}
            />
          ))}
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
        <View>
          <CollapseCardParent data={CollapseData} />
        </View>
        <Text style={{ marginHorizontal: 15, marginTop: 20 }}>
          If you are a Doctor and interested to learn more about the ZenOnco.io
          care Surgeries Click Here
        </Text>
      </ScrollView>
    </View>
  );
};

export default Info;
