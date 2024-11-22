import { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://todo-api.fesp.shop/api'
axios.defaults.timeout = 1500

function useFetch(fetchParams){
  // 서버로부터 받은 응답 data
  const [data, setData] = useState(null)
  // 에러 메시지
  const [error, setError] = useState(null)
  // 로딩중 상태
  const [isLoding, setIsLoding] = useState(false)

  useEffect(() => {
    request(fetchParams)
  }, []) //마운트 된 후 한번만 호출

  // API 서버에 fetch API로 ajax 요청을 보낸다.
  const request = async (params) => {
    try {
      setIsLoding(true)
      const res = await axios(params.url)
      console.log(res)

      setData(res.data)
      setError(null)
     
    }catch(err){
      // 에러 처리
      console.error(err)
      setError({ message: '일시적인 문제로 인해 작업 처리에 실패했습니다.'})
      setData(null)
    }finally{
      setIsLoding(false)
    }

  }

  return { data, error, isLoding }
}

export default useFetch