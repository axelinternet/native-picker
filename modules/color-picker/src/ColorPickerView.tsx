import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ColorPickerViewProps } from './ColorPicker.types';

const NativeView: React.ComponentType<ColorPickerViewProps> =
  requireNativeViewManager('ColorPicker');

export default function ColorPickerView(props: ColorPickerViewProps) {
  return <NativeView {...props} />;
}
