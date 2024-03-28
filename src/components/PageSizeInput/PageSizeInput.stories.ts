import { StoryObj } from "@storybook/react";
import { PageSizeInput } from "./PageSizeInput";
import { ParamsProvider } from "../../decorators/Provider";

const meta = {
  title: "Components/PageSizeInput",
  component: PageSizeInput,
  decorators: [ParamsProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
