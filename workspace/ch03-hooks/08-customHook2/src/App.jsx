import { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'

const API_SERVER = 'https://todo-api.fesp.shop/api'

function App() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoding, setIsLoding] = useState(false)

  // Todo API 서버에 ajax 요청을 보낸다
  const fetchTodo = async (fetchParams) => {
    try {
      const res = await fetch(API_SERVER+fetchParams.url)
      console.log(res)
      const jsonData = await res.json()
      console.log(jsonData)
      if(jsonData.ok){
        setData(jsonData.items)
        setError(null)
      }else{
        throw new Error(jsonData.error.message)
      }
    }catch(err){
      // 에러 처리
      console.error(err)

    }

  }

  useEffect(() => {
    const fetchParams = { url: '/todolist?delay=3000' }
    fetchTodo(fetchParams)
  }, [])

  return (
    <>
      <h1>08 Custom Hook - fetch API 사용</h1>
      <h2>할일 목록</h2>
      { isLoding &&
        <PacmanLoader color='#5eab4'></PacmanLoader>
      }
      { error && <p style={{ color: 'red'}}>{error.message}</p>}
      { data && (
        <ul>
          { data.map(item => <li key={ item._id}>{ item.title }</li>)}
        </ul>
      )}
    </>
  )
}

export default App
