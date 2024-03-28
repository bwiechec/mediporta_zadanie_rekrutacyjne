import { StoryObj } from "@storybook/react";
import { TagTable } from "./TagTable";
import {
  TagDataProvider,
  TagWithoutDataProvider,
} from "../../decorators/Provider";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/TagTable",
  component: TagTable,
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [TagDataProvider],
  args: {
    isPreviousData: false,
  },
};

export const Loading_new_data: Story = {
  decorators: [TagDataProvider],
  args: {
    isPreviousData: true,
  },
};

export const No_data: Story = {
  decorators: [TagWithoutDataProvider],
  args: {
    isPreviousData: false,
  },
};
