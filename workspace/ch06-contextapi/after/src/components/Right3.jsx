import { useContext, useEffect } from 'react';
import { SimpleContext } from '../../context/SimpleContext';

function Right3() {
  useEffect(()=>{
    console.log('      # Right3 렌더링.');
  });

  const simple = useContext(SimpleContext)
  return (
    <div>
      <h3>Right3 - { simple.hello }</h3>
      <button onClick={ () => {} }>+1</button>
    </div>
  );
}

export default Right3;