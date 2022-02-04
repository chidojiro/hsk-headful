import classNames from 'classnames';
import { HTMLDivProps, Tabs as HeadlessTabs, TabsProps as HeadlessTabsProps } from 'hsk-headless';
import React from 'react';

export type Tab = {
  value: number | string;
  label: React.ReactNode;
  content: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = HTMLDivProps &
  HeadlessTabsProps & {
    tabs: Tab[];
  };

// eslint-disable-next-line no-empty-pattern
export const Tabs = ({ value, handleChange, tabs, ...restProps }: Props) => {
  return (
    <HeadlessTabs>
      <div {...restProps}>
        <div className='sm:hidden'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          <select
            id='tabs'
            name='tabs'
            value={value}
            onChange={e => handleChange(e.target.value)}
            className='block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500'>
            {tabs.map(tab => (
              <option key={tab.v}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className='hidden sm:block'>
          <div className='border-b border-gray-200'>
            <nav className='flex -mb-px' aria-label='Tabs'>
              {tabs.map(tab => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames('w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm', {
                    'border-indigo-500 text-indigo-600': tab.current,
                    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': !tab.current,
                  })}
                  aria-current={tab.current ? 'page' : undefined}>
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </HeadlessTabs>
  );
};
