import React from 'react';

const IterationSample = () => {
  const values = ['1', '2', '3', '4'];
  const valueList = values.map((val, index) => <li key={index}>{val}</li>);

  return (
    <ul>{valueList}</ul>
  );
};

export default IterationSample;