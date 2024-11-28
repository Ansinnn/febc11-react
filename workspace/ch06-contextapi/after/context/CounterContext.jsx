import PropTypes from "prop-types";
import { Children, createContext, useState } from "react"

// 1. Context 객체 생성
const CounterContext = createContext()

CounterProvider.propTypes = {
  children: PropTypes.node
};

// 3. Provider 작성해서 export
export function CounterProvider({ children }) {
  // 4. 데이터, 상태, 상태를 관리하는 함수 정의
  // Left3에 전달
  const [count, setCount] = useState(10);

  // Right3에 전달
  const countDown = function(step){
    setCount(count - step);
  };
  const reset = function(){
    setCount(0);
  };
  const countUp = function(step){
    setCount(count + step);
  };

  const values = {
    state: {count},
    actions: { countDown, reset, countUp }
  }

  // 5. Context 객체의 Provider로 자식 컴포넌트를 감싸서 반환
  // value 속성에 전달한 Context 값 지정
  return (
    <CounterContext.Provider value={ values }>
      { children }
    </CounterContext.Provider>
  )
}

{/* <CounterProvider>
  <App />
</CounterProvider> */}

{/* <CounterContext.Provider value={ values }>
  <App />
</CounterContext.Provider> */}

// 2. Context 객체 export
export default CounterContext