import axios from "axios";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: 'https://11.fesp.shop',
    timeout: 1000*15,
    headers: {
      'Content-Type': 'application/json', // request의 데이터 타입
      accept: 'application/json', // response의 데이터 타입
      'client-id': '00-brunch',
    }
  });

  // 요청 인터셉터 추가하기
  instance.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjExMCwidHlwZSI6InVzZXIiLCJuYW1lIjoi7JWI7Iuc7J2AIiwiZW1haWwiOiJzaWV1bkBnbWFpbC5jb20iLCJpbWFnZSI6eyJvcmlnaW5hbG5hbWUiOiLDrMKCwqzDrMKnwoQuanBnIiwibmFtZSI6ImFjTUZjQ2dUeS5qcGciLCJwYXRoIjoiL2ZpbGVzLzAwLWJydW5jaC9hY01GY0NnVHkuanBnIn0sImxvZ2luVHlwZSI6ImVtYWlsIiwiaWF0IjoxNzMzODA4MDQ4LCJleHAiOjE3MzM4OTQ0NDgsImlzcyI6IkZFU1AifQ.9ofqlGDBnPD1EGkTlHuuxFn-qyrRAwMYt5PUWvu0fV4`;
    // 요청이 전달되기 전에 필요한 공통 작업 수행
    config.params = {
      delay: 500,
      ...config.params, // 기존 쿼리스트링 복사
    };
    return config;
  });

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use((response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
    // 응답 데이터를 이용해서 필요한 공통 작업 수행

    return response;
  }, (error) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
    // 공통 에러 처리
    console.error('인터셉터', error);
    return Promise.reject(error);
  });

  return instance;
}

export default useAxiosInstance;