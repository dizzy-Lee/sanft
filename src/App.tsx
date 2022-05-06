import React from "react";

import SanButton, {
  ButtonType,
  ButtonSize,
} from "./components/SanButton/button";
import message from "./components/SanMessage/message";
import SanMenu from "./components/SanMenu/menu";
import SanMenuItem from "./components/SanMenu/menuItem";

function App() {
  let count = 0;

  return (
    <div className="App">
      <SanMenu defaultIndex={1} mode="vertical" onSelect={(index) => {console.log(index)}}>
        <SanMenuItem disabled>menu one</SanMenuItem>
        <SanMenuItem>menu two</SanMenuItem>
        <SanMenuItem>menu three</SanMenuItem>
      </SanMenu>

      <SanButton
        size={ButtonSize.Small}
        onClick={e => {
          e.preventDefault();
          message.info("hello");
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
      <SanButton
        size={ButtonSize.Large}
        btnType={ButtonType.Danger}
        onClick={() => {
          message.error("danger");
        }}
      >
        large-danger
      </SanButton>
      <SanButton
        size={ButtonSize.Large}
        btnType={ButtonType.Warning}
        onClick={() => {
          message.warning("warning");
        }}
      >
        large-warning
      </SanButton>
      <SanButton
        size={ButtonSize.Large}
        btnType={ButtonType.Confirm}
        onClick={() => {
          count++
          message.success(count.toString());
        }}
      >
        large-success
      </SanButton>
    </div>
  );
}

export default App;
