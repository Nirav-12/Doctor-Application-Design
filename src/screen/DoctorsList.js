import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Card from "../comp/Card";
import Date from "../comp/Date";
import FilterButton from "../comp/FilterButton";
import TimeButton from "../comp/TimeButton";

const DoctorsList = ({ navigation }) => {
  let [select, setSelect] = useState("All");
  let [date, setDate] = useState("Today");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 45, backgroundColor: "white", paddingTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            title="All"
            click={() => setSelect("All")}
            val={select}
          />
          <FilterButton
            title="Ayurveda"
            click={() => setSelect("Ayurveda")}
            val={select}
          />
          <FilterButton
            title="Anti-cancer diet"
            click={() => setSelect("Anti-cancer diet")}
            val={select}
          />
          <FilterButton
            title="Wellness"
            click={() => setSelect("Wellness")}
            val={select}
          />
        </ScrollView>
      </View>
      <View>
        <Card />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Date text="Today" onclick={() => setDate("Today")} select={date} />
          <Date
            text="Mon,Dec 6"
            onclick={() => setDate("Mon,Dec 6")}
            select={date}
          />
          <Date
            text="Tue,Dec 7"
            onclick={() => setDate("Tue,Dec 7")}
            select={date}
          />
          <Date
            text="Wed,Dec 8"
            onclick={() => setDate("Wed,Dec 8")}
            select={date}
          />
        </ScrollView>
      </View>
      <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 70 }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <TimeButton time="09:00 AM" />
          <TimeButton time="09:30 AM" />
          <TimeButton time="10:00 AM" />
          <TimeButton time="10:30 AM" />
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorsList;
