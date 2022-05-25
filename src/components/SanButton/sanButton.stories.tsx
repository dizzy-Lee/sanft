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

import React, { Children, Component } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import SanButton from "./button"

export default {
  title: "按钮",
  component: SanButton,
} as ComponentMeta<typeof SanButton>

const Template: ComponentStory<typeof SanButton> = args => (
  <SanButton {...args}>primary button</SanButton>
)
export const Primary = Template.bind({})
Primary.args = { btnType: "primary" }

// export const Primary: ComponentStory<typeof SanButton> = () => (
//   <SanButton btnType="primary">primary button</SanButton>
// )
Primary.storyName = "this is primary style button"

export const Danger: ComponentStory<typeof SanButton> = () => (
  <SanButton btnType="danger">danger button</SanButton>
)

export const Default: ComponentStory<typeof SanButton> = () => (
  <SanButton btnType="default">default button</SanButton>
)
