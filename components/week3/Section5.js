import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ padding : 10 }}>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#607d8b" />
        <MyIcon title="coffee" name="coffee" size={30} color="#607d8b" />
        <MyIcon title="bath" name="bath" size={30} color="#607d8b" />
        <MyIcon title="car" name="car" size={30} color="#607d8b" />
      </View>
    </View>
  );
}