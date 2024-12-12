function f1(){
<<<<<<< HEAD
  console.log(`2. f1 작업 시작.`);
  console.log(`3. f1 작업중...`);
  // ......
  console.log(`4. f1 작업 종료.`);
=======
  console.log(`f1 작업 시작.`);
  console.log(`f1 작업중...`);
  // ......
  console.log(`f1 작업 종료.`);
>>>>>>> df2a7dd0b09a988f8176a637bfbac011163e4d77
  return (`f1의 결과물`);
}

function f2(f1Result){
<<<<<<< HEAD
  console.log(`5. ${f1Result}로 f2 작업 시작.`);
  console.log(`6. f2 작업중...`);
  // ......
  console.log(`7. f2 작업 종료.`);
=======
  console.log(`${f1Result}로 f2 작업 시작.`);
  console.log(`f2 작업중...`);
  // ......
  console.log(`f2 작업 종료.`);
>>>>>>> df2a7dd0b09a988f8176a637bfbac011163e4d77
  return (`최종 결과물`);
}

function test(){
<<<<<<< HEAD
  const f1Result = f1();
  const result = f2(f1Result);
  console.log('8.', result);
=======
  
>>>>>>> df2a7dd0b09a988f8176a637bfbac011163e4d77
}

console.log('1. 테스트 시작.');
test();
<<<<<<< HEAD
console.log('9. 테스트 완료.');
=======
console.log('테스트 완료.');
>>>>>>> df2a7dd0b09a988f8176a637bfbac011163e4d77
