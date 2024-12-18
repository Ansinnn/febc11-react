import { COUNTER_ACTION } from '@redux/counterActionCreator'

// 초기 상태
const initialState = { count: 0 } 

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수(state, action에 의해서만 실행됨)
// 상태가 복합 개체일 경우 immer 같은 라이브러리를 사용해서 불변성 유지해야 함
// state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
function counterReducer(state = initialState, action) {
  switch(action.type){
    case COUNTER_ACTION.UP:
      // state.count += action.payload.step; // 불변성 X
      // return state;
      return { ...state, count: state.count + action.payload.step }
    case COUNTER_ACTION.DOWN:
      return { ...state, count: state.count - action.payload.step }
    case COUNTER_ACTION.RESET:
      return { ...state, count: 0 }
    default:
      return state
  }
}

export default counterReducer