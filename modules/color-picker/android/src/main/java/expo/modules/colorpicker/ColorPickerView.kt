package expo.modules.colorpicker

import android.content.Context
import androidx.compose.ui.platform.ComposeView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class ColorPickerView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
    internal val composeView = ComposeView(context).also {

        it.layoutParams = LayoutParams(
            LayoutParams.WRAP_CONTENT,
            LayoutParams.WRAP_CONTENT
        )

        it.setContent {
            PickerComposable()
        }

        addView(it)
    }
}
