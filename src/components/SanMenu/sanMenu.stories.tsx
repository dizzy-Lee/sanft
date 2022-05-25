import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import SanMenu from "./menu"
import SanMenuItem from "./menuItem"
import SanSubMenu from "./subMenu"

export default {
  title: "菜单",
  component: SanMenu,
} as ComponentMeta<typeof SanMenu>



export const Menu: ComponentStory<typeof SanMenu> = () => (
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

)