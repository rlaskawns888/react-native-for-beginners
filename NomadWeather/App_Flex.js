import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:1, backgroundColor:"tomato" }}></View>
      <View style={{ flex:5, backgroundColor:"green"  }}></View>
      <View style={{ flex:1, backgroundColor:"orange" }}></View>
    </View>
  )
}