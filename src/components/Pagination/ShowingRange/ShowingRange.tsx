import { HTMLDivProps } from 'hsk-headless';
import React from 'react';
import { PaginationContext } from '../Pagination';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = HTMLDivProps & {};

// eslint-disable-next-line no-empty-pattern
export const ShowingRange = ({ ...restProps }: Props) => {
  const { showingRange } = React.useContext(PaginationContext);

  return (
    <div {...restProps}>
      <p className='text-sm text-gray-700'>
        Showing <span className='font-medium'>{showingRange.from}</span> to{' '}
        <span className='font-medium'>{showingRange.to}</span> of{' '}
        <span className='font-medium'>{showingRange.total}</span> results
      </p>
    </div>
  );
};
