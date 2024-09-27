import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export type onUpdateEvent = {
  color: string;
};

export type ColorPickerViewProps = {
  name: string;
  onUpdate?: (event: { nativeEvent: onUpdateEvent }) => void;
} & ViewProps;
