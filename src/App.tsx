import React from "react"

import SanButton, { ButtonSize } from "./components/SanButton/button"
import message from "./components/SanMessage/message"
import SanMenu from "./components/SanMenu/menu"
import SanMenuItem from "./components/SanMenu/menuItem"
import SanSubMenu from "./components/SanMenu/subMenu"
import SanTabs from "./components/SanTab/tabs"
import SanTabContent from "./components/SanTab/tabContent"

function App() {
  let count = 0

  return (
    <div className="App">
      <SanMenu
        defaultIndex="0"
        onSelect={index => {
          console.log(index)
        }}
        mode="horizontal"
      >
        <SanMenuItem>menu one</SanMenuItem>
        <SanMenuItem>menu two</SanMenuItem>
        <SanSubMenu title="this is a sub menu">
          <SanMenuItem>this is first item</SanMenuItem>
          <SanMenuItem>this is two item</SanMenuItem>
          <SanMenuItem>this is third item</SanMenuItem>
        </SanSubMenu>
        <SanMenuItem>menu three</SanMenuItem>
      </SanMenu>

      <SanTabs defaultIndex="0">
        <SanTabContent title="one">
          <div>content one</div>
          <SanButton
            size='sm'
            onClick={e => {
              e.preventDefault()
              message.info("hello")
            }}
          >
            Hello world
          </SanButton>
        </SanTabContent>
        <SanTabContent title="two">content two</SanTabContent>
        <SanTabContent title="three">content three</SanTabContent>
      </SanTabs>

      <SanButton
        size='sm'
        onClick={e => {
          e.preventDefault()
          message.info("hello")
        }}
      >
        Hello world
      </SanButton>
      <SanButton btnType="primary" disabled>
        large
      </SanButton>
      <SanButton
        btnType="link"
        href="https://www.baidu.com"
        size='lg'
        disabled
      >
        link
      </SanButton>
      <SanButton
        size='lg'
        btnType="danger"
        onClick={() => {
          message.error("danger")
        }}
      >
        large-danger
      </SanButton>
      <SanButton
        size='lg'
        btnType="warning"
        onClick={() => {
          message.warning("warning")
        }}
      >
        large-warning
      </SanButton>
      <SanButton
        size='lg'
        btnType="confirm"
        onClick={() => {
          count++
          message.success(`success${count}`)
        }}
      >
        large-success
      </SanButton>
    </div>
  )
}

export default App
