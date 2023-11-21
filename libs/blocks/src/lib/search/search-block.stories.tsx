import { Meta, StoryObj } from '@storybook/react';
import {
  SearchResults,
  SearchResultsProps,
} from 'libs/templates/src/lib/help-center/sections/search/search-results';

const meta: Meta<SearchResultsProps> = {
  title: 'Blocks/SearchBlock',
  component: SearchResults,
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
