import React from 'react';

const List = ({ data, render }) => {
  return <div>{data.map((item, index) => render(item, index))}</div>;
};

export default List;
