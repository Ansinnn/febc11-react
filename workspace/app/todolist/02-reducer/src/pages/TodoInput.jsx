import { useState } from "react";

function TodoInput({ addItem }){
  const [title, setTitle] = useState(''); //화면 다시 랜더링(state를 가지고있는 component만)

  const handleAdd = () => {
    if(title.trim() !== ''){
      addItem(title);
      setTitle('');
    }
  };
  
  const handleKeyUp = (event) => {
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus onKeyUp={ handleKeyUp } value={ title } onChange={ event => setTitle(event.target.value) } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput