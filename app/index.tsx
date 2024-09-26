import { View } from "react-native";
import { ColorPickerView, hello } from "../modules/color-picker";
import { useState } from "react";
export default function Index() {
  const [holder, setHolder] = useState("no");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "orangered",
        justifyContent: "center",
        alignItems: "center",
      }}
      onTouchStart={() => {
        console.log("lol");
        setHolder("hej");
      }}
    >
      <ColorPickerView name="nisse" display={holder} />
    </View>
  );
}
