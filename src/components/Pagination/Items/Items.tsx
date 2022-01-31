import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { HTMLDivProps } from 'hsk-headless';
import React from 'react';
import { PaginationContext } from '../Pagination';

const Item = ({
  className,
  as: As = 'button',
  ...restProps
}: React.DetailedHTMLProps<React.HTMLAttributes<any>, any> & { as?: any }) => {
  return (
    <As
      {...restProps}
      className={classNames(
        'relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50',
        className
      )}></As>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = HTMLDivProps & {};

// eslint-disable-next-line no-empty-pattern
export const Items = ({ className, ...restProps }: Props) => {
  const { items } = React.useContext(PaginationContext);

  return (
    <nav
      className={classNames('relative z-0 inline-flex -space-x-px rounded-md shadow-sm', className)}
      aria-label='Pagination'
      {...restProps}>
      {items.map(({ page, disabled, selected, type, onClick }, idx) => {
        if (type === 'previous')
          return (
            <Item className='px-2 rounded-l-md' key={type} onClick={onClick}>
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
            </Item>
          );

        if (type === 'next')
          return (
            <Item className='px-2 rounded-r-md' key={type} onClick={onClick}>
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
            </Item>
          );

        if (type === 'ellipsis')
          return (
            <Item as='span' className='hover:bg-white' key={'ellipsis' + idx}>
              ...
            </Item>
          );

        return (
          <Item
            key={page}
            aria-current={selected && 'page'}
            onClick={onClick}
            className={classNames({ 'text-indigo-600 border border-indigo-500 bg-indigo-50 z-10': selected })}>
            {page}
          </Item>
        );
      })}
    </nav>
  );
};
