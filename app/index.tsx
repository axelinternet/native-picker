import { View } from "react-native";
import { ColorPickerView } from "../modules/color-picker";
import { useState } from "react";
export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState("#ff00ff");
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
        style={{ width: "100%", flex: 1 }}
        onUpdate={(e) => setBackgroundColor(`#${e.nativeEvent.color}`)}
      />
    </View>
  );
}
