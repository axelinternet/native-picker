import { View } from "react-native";
import { ColorPickerView } from "../modules/color-picker";
import { useState } from "react";
export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState("#4d3e4d");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <ColorPickerView
        name="nisse"
        style={{ width: "95%", height: 375 }}
        onUpdate={(e) => {
          setBackgroundColor(`${e.nativeEvent.color}`);
        }}
      />
    </View>
  );
}
