import React, { useState } from 'react';

export default function Pair({ source, target, rate, onDelete }) {
  const [amount, setAmount] = useState(1);
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <li className='pair'>
      <input
        className='source__amount'
        type='number'
        value={amount}
        min={0}
        max={99999}
        onChange={({ target }) => setAmount(target.value)}
      />
      <span className='curr__code code_source'>{isSwitched ? target : source}</span>
      <span>=</span>
      <p className='result__value'>
        {rate ? (amount * (isSwitched ? 1 / rate.rates[target] : rate.rates[target])).toFixed(2) : 0}
      </p>
      <span className='curr__code code_target'>{isSwitched ? source : target}</span>
      <button className='btn_ switch__code' onClick={() => setIsSwitched(!isSwitched)}></button>
      <button className='btn_ delete__code' onClick={() => onDelete(source, target)}></button>
    </li>
  );
}
