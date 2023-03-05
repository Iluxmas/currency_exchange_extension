import React, { useEffect, useState } from 'react';

export default function PairForm({ codes, onAdd }) {
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (codes) {
      let entries = Object.entries(codes);

      setData(entries);
      setSource(entries[0][0]);
      setTarget(entries[0][0]);
    }
  }, [codes]);

  function addNewPair() {
    onAdd(source, target);
  }

  return (
    <div className='form__container'>
      <h1>Add new pair</h1>
      <div className='select__container'>
        <label htmlFor='source' className='input__label'>
          Source
        </label>
        <select name='source' id='source__select' value={source} onChange={({ target }) => setSource(target.value)}>
          {!!data &&
            data.map(([code, name]) => (
              <option key={code + name.slice(0, 10)} value={code}>
                {code + ' - ' + name}
              </option>
            ))}
        </select>
      </div>
      <div className='select__container'>
        <label htmlFor='target' className='input__label'>
          Target
        </label>
        <select name='target' id='target__select' value={target} onChange={({ target }) => setTarget(target.value)}>
          {!!data &&
            data.map(([code, name]) => (
              <option key={code + name.slice(0, 10)} value={code}>
                {code + ' - ' + name}
              </option>
            ))}
        </select>
      </div>
      <button id='button__add' onClick={addNewPair}>
        Add Pair
      </button>
    </div>
  );
}
