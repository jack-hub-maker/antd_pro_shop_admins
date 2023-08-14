import React from 'react';
import { Data } from './type';

const ItemRender = ({ data }: Data) => (
  <React.Fragment>{String(data)}</React.Fragment>
);

export default React.memo(ItemRender);
