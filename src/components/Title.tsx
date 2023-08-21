import React from 'react';

function Title(props: {children: string; id?: string}) {
  const { children, id } = props;

  return(
    <h1
      id={id && id}
      className="text-2xl font-bold dark:text-white underline underline-offset-8 decoration-4 mb-5 text-stone-900"
    >
      {children}
    </h1>
  );
};

export default Title;