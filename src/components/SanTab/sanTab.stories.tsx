import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SanButton from "../SanButton/button";
import SanTabs from "./tabs";
import SanTabContent from "./tabContent";

export default {
  title: "标签页",
  component: SanTabs,
} as ComponentMeta<typeof SanTabs>;

export const Tabs: ComponentStory<typeof SanTabs> = () => (
  <SanTabs defaultIndex="0">
    <SanTabContent title="one">
      <div>content one</div>
      <SanButton
        size="sm"
      >
        Hello world
      </SanButton>
    </SanTabContent>
    <SanTabContent title="two">content two</SanTabContent>
    <SanTabContent title="three">content three</SanTabContent>
  </SanTabs>
);
