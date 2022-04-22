import React from "react"

import SanButton, { ButtonType, ButtonSize } from "./components/SanButton/button"
function App() {
    return (
        <div className="App">
            <SanButton>Hello world</SanButton>
            <SanButton
                btnType={ButtonType.Primary}
                size={ButtonSize.Large}
                disabled
            >
                large
            </SanButton>
            <SanButton
                btnType={ButtonType.Link}
                href="https://www.baidu.com"
                size={ButtonSize.Large}
                disabled
            >
                link
            </SanButton>
        </div>
    )
}

export default App
