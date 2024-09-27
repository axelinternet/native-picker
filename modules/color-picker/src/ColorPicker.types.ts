import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export type ColorPickerViewProps = {
  name: string;
} & ViewProps;
