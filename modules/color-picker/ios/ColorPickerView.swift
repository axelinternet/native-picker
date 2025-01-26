import ExpoModulesCore
import SwiftUI
import UIKit
import ChromaColorPicker
func hexString(from color: UIColor) -> String {
    guard let components = color.cgColor.components, components.count >= 3 else {
        return "#000000"
    }
    let r = Float(components[0])
    let g = Float(components[1])
    let b = Float(components[2])
    return String(format: "#%02lX%02lX%02lX", lroundf(r * 255), lroundf(g * 255), lroundf(b * 255))
}

class ColorPickerView: ExpoView {
    let colorPicker = ChromaColorPicker()
    let onUpdate = EventDispatcher()
    private var homeHandle: ChromaColorHandle!
    
    required init(appContext: AppContext? = nil) {
        
        
        //clipsToBounds = true // ?
        homeHandle = ChromaColorHandle(color: .orange)
        colorPicker
            .addHandle(homeHandle)
    
        super.init(appContext: appContext)
        colorPicker.delegate = self
        addSubview(colorPicker)
    }
    
    override func layoutSubviews() {
      colorPicker.frame = bounds
    }
    
}

extension ColorPickerView: ChromaColorPickerDelegate {
    
    func colorPickerHandleDidChange(_ colorPicker: ChromaColorPicker, handle: ChromaColorHandle, to color: UIColor) {
        colorPicker.backgroundColor = color
        onUpdate(["color": hexString(from: color)])
    }
}
