// import React from "react"
// import { storiesOf } from "@storybook/react"
// import { action } from "@storybook/addon-actions"
// import { withInfo } from '@storybook/addon-info'

// import SanButton from "./button"

// const defaultButton = () => (
//   <SanButton onClick={action("clicked")}>default button</SanButton>
// )

// const buttonWithSize = () => (
//   <>
//     <SanButton size="sm">small button</SanButton>
//     <SanButton>normal button</SanButton>
//     <SanButton size="lg">large button</SanButton>
//   </>
// )

// const buttonWithType = () => (
//   <>
//     <SanButton btnType="primary">primary button</SanButton>
//     <SanButton btnType="default">default button</SanButton>
//     <SanButton btnType="danger">danger button</SanButton>
//     <SanButton btnType="warning">warning button</SanButton>
//     <SanButton btnType="confirm">confirm button</SanButton>
//     <SanButton btnType="link" href="https://www.baidu.com">
//       link button
//     </SanButton>
//   </>
// )
// storiesOf("按钮", module)
//   .add("默认SanButton", defaultButton)
//   .add("不同大小的SanButton", buttonWithSize)
//   .add("不同类型的SanButton", buttonWithType)

// Button.stories.ts|tsx

// Button.stories.ts|tsx

import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import SanButton from "./button"

export default {
  title: "按钮",
  component: SanButton,
  argTypes: {
    btnType: {
      options: ['primary', 'danger', 'warning', 'confirm', 'default', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['lg', 'sm'],
      control: {type: 'radio'}
    },
    disabled: {
      control: {type: 'boolean'}
    }
  },
} as ComponentMeta<typeof SanButton>

const Template: ComponentStory<typeof SanButton> = args => (
  <SanButton {...args}>button</SanButton>
)
export const WarningButton = Template.bind({})
WarningButton.args = { btnType: "warning", size: 'lg' }
WarningButton.storyName = "Warning"

export const DangerButton = Template.bind({})
DangerButton.args = {btnType: "danger"}
DangerButton.storyName = "Danger"

export const DefaultButton = Template.bind({})
DefaultButton.args = {btnType: "default"}
DefaultButton.storyName = "Default"

export const ConfirmButton = Template.bind({})
ConfirmButton.args = {btnType: "confirm"}
ConfirmButton.storyName = "Confirm"