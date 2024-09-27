package expo.modules.colorpicker

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.github.skydoves.colorpicker.compose.ColorEnvelope
import com.github.skydoves.colorpicker.compose.HsvColorPicker
import com.github.skydoves.colorpicker.compose.rememberColorPickerController
import expo.modules.kotlin.viewevent.ViewEventCallback

@Composable
fun PickerComposable(colorCallback: ViewEventCallback<Map<String, Any>>) {
    val controller = rememberColorPickerController()
    Column (
        Modifier
            .fillMaxWidth()
            .fillMaxHeight(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {

        Card() {
            Column (
                Modifier.padding(vertical = 15.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {

                HsvColorPicker(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(450.dp)
                        .padding(10.dp),
                    controller = controller,
                    onColorChanged = { colorEnvelope: ColorEnvelope ->
                        // do something
                        colorCallback(mapOf("color" to colorEnvelope.hexCode))
                    }
                )

            }
        }
    }
}
