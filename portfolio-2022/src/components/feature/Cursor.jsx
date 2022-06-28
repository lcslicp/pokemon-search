import React from 'react';
import useMousePosition from '../../hooks/useMousePosition';

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <div>
      <div className='lg:cursor' style={{ left: ` ${x}px`, top: `${y}px` }}></div>
    </div>
  );
};

export default Cursor;
