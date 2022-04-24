import React from "react";

import SanButton, {
  ButtonType,
  ButtonSize,
} from "./components/SanButton/button";

import { SanMessage } from "./components/SanMessage/message";

function App() {
  SanMessage({messageTitle: "lyf"})

  return (
    <div className="App">
      <SanButton
        size={ButtonSize.Small}
        onClick={(e) => {
          e.preventDefault();
          alert("hello");
        }}
      >
        Hello world
      </SanButton>
      <SanButton btnType={ButtonType.Primary} disabled>
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
      <SanButton size={ButtonSize.Large} btnType={ButtonType.Danger}>
        large-danger
      </SanButton>
      <SanButton size={ButtonSize.Large} btnType={ButtonType.Warning}>
        large-warning
      </SanButton>
      <SanButton size={ButtonSize.Large} btnType={ButtonType.Confirm}>large-confirm</SanButton>
    </div>
  );
}

export default App;
