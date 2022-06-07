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
    size="sm"
    onClick={e => {
      e.preventDefault()
      message.info("Message")
    }}
  >
    normal message
  </SanButton>
)

export const WarningMessage: ComponentStory<typeof SanButton> = () => (
  <SanButton
    btnType="warning"
    onClick={e => {
      e.preventDefault()
      message.warning("Warning")
    }}
  >
    warning message
  </SanButton>
)

export const DangerMessage: ComponentStory<typeof SanButton> = () => (
  <SanButton
    btnType="danger"
    onClick={e => {
      e.preventDefault()
      message.error("Danger")
    }}
  >
    danger message
  </SanButton>
)

export const SuccessMessage: ComponentStory<typeof SanButton> = () => (
  <SanButton
    btnType="confirm"
    onClick={e => {
      e.preventDefault()
      message.success("Success")
    }}
  >
    success message
  </SanButton>
)
