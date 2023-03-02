import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import DoctorCard from "../comp/DoctorCard";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import KnowMore from "../comp/KnowMore";
import UseCoupons from "../comp/UseCoupons.js";
import Promise from "../comp/Promise";
import Reviews from "../comp/Reviews";
import NeedHelp from "../comp/NeedHelp";
import OnlineConsultation from "../comp/OnlineConsultation";

const BookAppointment = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <DoctorCard />
        </View>

        <OnlineConsultation />
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 15 }}>
            Tue, Feb 28 | 11:33 AM
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={20}
              color="#108FE5"
            />
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              <Text style={{ color: "#108FE5" }}>Zen's Promise </Text>for
              Instant appointment confirmation
            </Text>
          </View>
          <KnowMore />
          <View style={{ marginVertical: 15 }}>
            <UseCoupons />
          </View>
          <Text style={{ fontSize: 18, marginVertical: 7 }}>Price Details</Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 7,
              justifyContent: "space-between",
            }}
          >
            <Text>Total Amount</Text>
            <Text>6999</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 7,
              justifyContent: "space-between",
            }}
          >
            <Text>Discount</Text>
            <Text style={{ color: "green" }}>- 999</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 7,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              paddingVertical: 10,
              marginVertical: 7,
              justifyContent: "space-between",
            }}
          >
            <Text>Total Amout</Text>
            <Text>6000</Text>
          </View>
          <Text style={{ color: "green" }}>
            You will save '999 on this order
          </Text>
        </View>

        <Promise />

        <Reviews />

        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            borderTopWidth: 1,
            paddingTop: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={[{ height: 20, width: 20, borderWidth: 1 }]}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={{ height: 18, width: 18 }}
            >
              {isChecked && (
                <View style={{ backgroundColor: "#108FE5", height: 18 }}>
                  <Ionicons
                    name="checkmark"
                    size={15}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20, marginHorizontal: 10 }}>
            Get notification on Whatsapp
          </Text>
          <FontAwesome name="whatsapp" size={24} color="#28b23e" />
        </View>
        <View
          style={{
            marginHorizontal: 15,
            paddingBottom: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <Text>• Note: Rs 50 cancellation charges applicable</Text>
          <Text>• Update will be sent to +91 99 30 70 90 00</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>• </Text>
            <Text>
              By booking the appointment, you agree to Zenonco.io Trems and
              Conditions. You can also Pre-pay for this appointment by selecting
              Pay Online option. You can read our payment FAQS.
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>Cancellation Policy</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text style={{ marginTop: 5, marginBottom: 15 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Text>
          <NeedHelp />
        </View>

        <View
          style={{
            backgroundColor: "#e9f3ff",
            height: 80,
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
              }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                marginRight: 10,
              }}
            />
            <View>
              <Text>Appointment for</Text>
              <Text style={{ fontSize: 17 }}>Dimpal Parmar</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#108FE5" }}>Change</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            height: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 20 }}>₹ 6,999</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#108FE5",
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 3,
            }}
          >
            <Text style={{ color: "white" }}>Pay & confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;
