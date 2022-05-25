import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import SanButton from "../SanButton/button"
import message from "./message"

export default {
  title: "通知",
  component: SanButton,
} as ComponentMeta<typeof SanButton>



export const Message: ComponentStory<typeof SanButton> = () => (
  <SanButton
  size='sm'
  onClick={e => {
    e.preventDefault()
    message.info("Message")
  }}
>
  Click Me!
</SanButton>

)