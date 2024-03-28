import { StoryObj } from "@storybook/react";
import { LoadingOverlay } from "./LoadingOverlay";

const meta = {
  title: "Components/LoadingOverlay",
  component: LoadingOverlay,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    open: false,
    withoutBackground: true,
  },
};

export const Open_no_background: Story = {
  args: {
    open: true,
    withoutBackground: true,
  },
};

export const Open_with_background: Story = {
  args: {
    open: true,
    withoutBackground: false,
  },
};
