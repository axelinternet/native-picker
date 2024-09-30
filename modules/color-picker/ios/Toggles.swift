import SwiftUI

struct Toggles: View {
    var onUpdate: (String) -> Void
    
    @State private var isBold: Bool = false
    @State private var isItalic: Bool = false
    @State private var isUnderline: Bool = false
    
    var body: some View {
        Form {
            Section {
                Toggle("Bold", isOn: $isBold)
                    .onChange(of: isBold) { value in
                        onUpdate("ff4500")
                    }
                Toggle("Italic", isOn: $isItalic)
                Toggle("Underline", isOn: $isUnderline)
            }
        }
    }
}
