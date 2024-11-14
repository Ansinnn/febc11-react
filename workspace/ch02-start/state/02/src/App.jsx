import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h2>02 이벤트 헨들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{ number }</p>
      <button onClick={ () => {
        console.log('클릭 처리 시작', number)

        // 호출되는 즉시 리렌더링이 되지 않고 모아두었다가 한번에 반영됨(배치)
        // 화면을 리렌더링 한다는 것 : App() 다시 호출
        // setNumber(number + 1) // 0 + 1
        // setNumber(number + 1) // 0 + 1
        // setNumber(number + 1) // 0 + 1

        // 콜백함수의 리턴값을 저장해 두었다가 다음에 호출되는 콜백함수의 인자로 전달
        setNumber(num => num + 1) // 0 + 1
        setNumber(num => num + 1) // 1 + 1
        setNumber(num => num + 1) // 2 + 1

        console.log('클릭 처리 종료', number)
      }} >+3</button>
    </>
  )
}

export default App
