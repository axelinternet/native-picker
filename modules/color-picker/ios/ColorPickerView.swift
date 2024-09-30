import ExpoModulesCore
import SwiftUI
import UIKit


class ColorPickerView: ExpoView {
    private let contentView: UIHostingController<Toggles>
    
    let onUpdate: EventDispatcher
    
    required init(appContext: AppContext? = nil) {
        onUpdate = EventDispatcher()
        
        var handleUpdate: ((String) -> Void)?
        
        contentView = UIHostingController(rootView: Toggles(
            onUpdate: { color in
                handleUpdate?(color)
            }
        ))
        
        super.init(appContext: appContext)
        
        handleUpdate = { color in
            self.onUpdate(["color": color])
        }
        
        // clipsToBounds = true
        addSubview(contentView.view)
    }
    
    override func layoutSubviews() {
        contentView.view.frame = bounds
    }
    
}
