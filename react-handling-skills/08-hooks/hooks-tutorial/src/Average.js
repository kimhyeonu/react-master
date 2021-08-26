import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');

  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputRef = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber('');
  // };

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');

    inputRef.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputRef} />

      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
