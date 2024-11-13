function func(data1, data2){
	data1 += 10
  data2[0] += 10
  console.log(data1, data2[0])
}

var d1 = 80;  // number // 값을 복사
var d2 = [80];  // array(object) // 주소를 복사

console.log(typeof d1, typeof d2);

console.log('===== 함수 호출 이전 =====');
console.log(d1, d2[0]); // 80 80

console.log('===== 함수 호출 =====');
func(d1, d2); // 90 90

console.log('===== 함수 호출 이후 =====');
console.log(d1, d2[0]); // 80 90