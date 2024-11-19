<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> 2e38db1 (🚧)
import { useState } from "react";

function TodoInput({ addItem }){
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(4);

  const handleAdd = () => {
    if(title.trim() !== ''){
      const item = { _id: nextId, title, done: false };
      addItem(item);
      
      setNextId(nextId + 1);
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

<<<<<<< HEAD
TodoInput.propTypes = {
  addItem: PropTypes.func.isRequired
};

=======
>>>>>>> 2e38db1 (🚧)
export default TodoInput;