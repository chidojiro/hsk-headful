import { HTMLDivProps, usePagination, UsePaginationProps, UsePaginationReturn } from 'hsk-headless';
import React from 'react';
import { Items } from './Items';
import { ShowingRange } from './ShowingRange';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = UsePaginationProps & HTMLDivProps & {};

type PaginationProviderValue = UsePaginationReturn;

export const PaginationContext = React.createContext<PaginationProviderValue>({
  items: [],
  showingRange: { from: 0, to: 0, total: 0 },
});

// eslint-disable-next-line no-empty-pattern
export const Pagination = ({
  children,
  totalRecord,
  centerItemsCount,
  onChange,
  page,
  perPage,
  sideItemsCount,
  ...restProps
}: Props) => {
  const usePaginationReturn = usePagination({ totalRecord, centerItemsCount, onChange, page, perPage, sideItemsCount });

  const providerValue = React.useMemo(() => usePaginationReturn, [usePaginationReturn]);

  if (!children)
    return (
      <PaginationContext.Provider value={providerValue}>
        <Items {...restProps} />
      </PaginationContext.Provider>
    );

  return <PaginationContext.Provider value={providerValue}>{children}</PaginationContext.Provider>;
};

Pagination.Items = Items;
Pagination.ShowingRange = ShowingRange;
