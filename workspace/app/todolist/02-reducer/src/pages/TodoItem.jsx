import PropTypes from "prop-types";

function TodoItem({ item, togleDone, deleteItem }){
  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => togleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item._id)}>삭제</button>
    </li>
  );
}

TodoItem.propTypes = {
  // item: PropTypes.object.isRequired,
  item: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }),
  togleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}
export default TodoItem