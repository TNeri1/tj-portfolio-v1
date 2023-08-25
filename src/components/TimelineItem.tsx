import React from 'react';

function TimelineItem(props: {year: string, title: string, duration: string, company: string, details: string}) {
  const { year, title, duration, company, details } = props;
  
  return (
    <ol className="flex flex-col md-flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold dark:text-white text-stone-900">
            {title}
          </h3>
        </p>
        <p className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-md my-2 text-sm font-semibold text-stone-200">
          {company}
        </p>
          <span className="px-2 my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </span>
        <p className="my-2 text-base font-normal text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;