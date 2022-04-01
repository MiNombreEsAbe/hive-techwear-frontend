import React from 'react';
import Ilk from '../cards/Ilk';

export const CardList = ( kidneys ) => {
    return (
      <div>
        {kidneys.map((kidney) => {
          return (
<Ilk kidney={kidney} key={kidney._id} />
        )})}
      </div>
    );
  };
  export default CardList;