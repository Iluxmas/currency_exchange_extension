import React from 'react';
import Pair from './pair.jsx';

export default function PairsList({ rates, pairsData, onDelete }) {
  console.log(rates);
  return (
    <div>
      <h1>Existing pairs</h1>
      <ul id='pairs__list'>
        {!!pairsData &&
          pairsData.map(([src, trgt]) => (
            <Pair
              source={src}
              target={trgt}
              key={src + trgt}
              rate={
                rates.find((item) => item[src] !== undefined) ? rates.find((item) => item[src] !== undefined)[src] : 0
              }
              onDelete={onDelete}
            ></Pair>
          ))}
      </ul>
      <button id='btn__update'>Update rates</button>
    </div>
  );
}
