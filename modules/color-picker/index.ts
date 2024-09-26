import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ColorPicker.web.ts
// and on native platforms to ColorPicker.ts
import ColorPickerModule from "./src/ColorPickerModule";
import ColorPickerView from "./src/ColorPickerView";
import {
  ChangeEventPayload,
  ColorPickerViewProps,
} from "./src/ColorPicker.types";

// Get the native constant value.
export const PI = ColorPickerModule.PI;

export function hello(): string {
  return ColorPickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ColorPickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ColorPickerModule ?? NativeModulesProxy.ColorPicker
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ColorPickerView, ColorPickerViewProps, ChangeEventPayload };
