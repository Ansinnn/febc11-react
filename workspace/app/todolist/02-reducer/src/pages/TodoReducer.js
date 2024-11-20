import { produce } from 'immer'

// state, action을 전달받고 새로운 state를 반환하는 순수 함수
function TodoReducer(state, action){
  const targetIndex = state.findIndex(item => item._id === action.value._id)
  let newState
  switch(action.type){
    case 'ADD':
      newState = produce(state, draft => {
        draft.push(action.value)
      })
      break
    case 'TOGGLE':
      // 연관된 객체를 새로운 객체로 바꿔줌
      produce(state, draft => {
        draft[targetIndex].done = !draft[targetIndex].done
      })
      
      break
    case 'DELETE':
      newState = produce(state, draft => {
        draft.splice(targetIndex, 1)
      })
      break
  }
  return newState
}

export default TodoReducer