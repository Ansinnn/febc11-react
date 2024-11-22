import { PacmanLoader } from 'react-spinners'
import useFetch from '@hooks/useFetch'
import useAxios from '@hooks/useAxios'


function App() {

  // const { data, error, isLoding } = useFetch({ url: '/todolist?delay=2000'})
  const { data, error, isLoding } = useAxios({ url: '/todolist?delay=1000'})
  return (
    <>
      <h1>09 Custom Hook - useFetch, useAxios</h1>
      <h2>할일 목록</h2>
      { isLoding &&
        <PacmanLoader color='#5eeb34' size={18}></PacmanLoader>
      }
      { error && <p style={{ color: 'red'}}>{error.message}</p>}
      { data && (
        <ul>
          { data.items.map(item => <li key={ item._id}>{ item.title }</li>)}
        </ul>
      )}
    </>
  )
}

export default App
