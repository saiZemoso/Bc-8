import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ColumnHeader from "./index";

export default {
  title: "Molecules/ColumnHeader",
  component: ColumnHeader,
} as ComponentMeta<typeof ColumnHeader>;

const template: ComponentStory<typeof ColumnHeader> = () => <ColumnHeader />;

export const Primary = template.bind({});
