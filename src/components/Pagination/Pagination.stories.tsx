import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationProps } from '.';

export default {
  title: 'Hooks/Pagination',
  component: Pagination,
};

const BasicTemplate: ComponentStory<typeof Pagination> = (props: PaginationProps) => {
  return <Pagination {...props} />;
};

const WithShowingRangeTemplate: ComponentStory<typeof Pagination> = (props: PaginationProps) => {
  return (
    <Pagination {...props}>
      <div className='flex items-center justify-between'>
        <Pagination.ShowingRange />
        <Pagination.Items />
      </div>
    </Pagination>
  );
};

export const Uncontrolled = BasicTemplate.bind({});
Uncontrolled.argTypes = { page: { control: { disable: true } } };
Uncontrolled.args = {
  totalRecord: 104,
  perPage: 10,
  centerItemsCount: 3,
  sideItemsCount: 3,
};

export const Controlled = BasicTemplate.bind({});
Controlled.args = {
  totalRecord: 104,
  perPage: 10,
  centerItemsCount: 3,
  sideItemsCount: 3,
  page: 4,
};

export const WithShowingRange = WithShowingRangeTemplate.bind({});
WithShowingRange.args = {
  totalRecord: 104,
  perPage: 10,
  centerItemsCount: 3,
  sideItemsCount: 3,
};
