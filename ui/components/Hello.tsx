import React from 'react';

const Hello = ({ name }: {name: string}) => (
  <h2 className="font-bold text-xl">
    Hello there <span className="text-blue-600">{name}</span>
  </h2>
);

export default Hello;
