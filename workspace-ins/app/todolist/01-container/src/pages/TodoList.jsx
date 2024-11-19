<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> 2e38db1 (🚧)
import TodoItem from "@pages/TodoItem";

function TodoList({ itemList, toggleDone, deleteItem }){
  const list = itemList.map(item => <TodoItem key={ item._id } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

<<<<<<< HEAD
TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

=======
>>>>>>> 2e38db1 (🚧)
export default TodoList;