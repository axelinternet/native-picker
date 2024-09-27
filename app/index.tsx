import { View } from "react-native";
import { ColorPickerView, hello } from "../modules/color-picker";
import { useState } from "react";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onTouchStart={() => {
        console.log("lol");
      }}
    >
      <ColorPickerView name="nisse" style={{ width: "100%", flex: 1 }} />
    </View>
  );
}
