package expo.modules.colorpicker

import android.content.Context
import com.github.dhaval2404.colorpicker.ColorPickerDialog
import com.github.dhaval2404.colorpicker.model.ColorShape

import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class ColorPickerView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
    internal val colorPicker =  ColorPickerDialog
        .Builder(context)                        // Pass Activity Instance
        .setTitle("Pick Theme")            // Default "Choose Color"
        .setColorShape(ColorShape.SQAURE)   // Default ColorShape.CIRCLE
        .setDefaultColor("#ff00ff")     // Pass Default Color

    fun display() {
        colorPicker.show()
    }
}
