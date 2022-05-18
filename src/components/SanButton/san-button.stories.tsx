import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from '@storybook/addon-info'

import SanButton from "./button"

const defaultButton = () => (
  <SanButton onClick={action("clicked")}>default button</SanButton>
)

const buttonWithSize = () => (
  <>
    <SanButton size="sm">small button</SanButton>
    <SanButton>normal button</SanButton>
    <SanButton size="lg">large button</SanButton>
  </>
)

const buttonWithType = () => (
  <>
    <SanButton btnType="primary">primary button</SanButton>
    <SanButton btnType="default">default button</SanButton>
    <SanButton btnType="danger">danger button</SanButton>
    <SanButton btnType="warning">warning button</SanButton>
    <SanButton btnType="confirm">confirm button</SanButton>
    <SanButton btnType="link" href="https://www.baidu.com">
      link button
    </SanButton>
  </>
)
storiesOf("按钮", module)
  // .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'this is a very nice component',
      inline: true
    }
  })
  .add("默认SanButton", defaultButton)
  .add("不同大小的SanButton", buttonWithSize)
  .add("不同类型的SanButton", buttonWithType)
