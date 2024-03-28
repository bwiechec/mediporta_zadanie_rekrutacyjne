import { StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import { ParamsProvider } from "../../decorators/Provider";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [ParamsProvider],
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasMore: true,
    currentPage: 1,
    onPageChange: fn(),
  },
};
