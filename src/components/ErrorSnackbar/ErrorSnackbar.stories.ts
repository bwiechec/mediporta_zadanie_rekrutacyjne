import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ErrorSnackbar } from "./ErrorSnackbar";

const meta = {
  title: "Components/ErrorSnackbar",
  component: ErrorSnackbar,
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    message: "Snackbar is opened",
  },
};

export const Closed: Story = {
  args: {
    open: false,
    message: "Snackbar is opened",
  },
};
