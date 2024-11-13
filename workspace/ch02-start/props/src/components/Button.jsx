import './Button.css';

// 타입 생략시 default 값 button으로 설정
// children에는 자식엘리먼트(텍스트)가 들어감
export default function Button({ children, type="button", onClick: clickHandler, color }){
  return <button className="rounded-button" style={{ backgroundColor: color }} type={ type } onClick={ clickHandler }>{ children }</button>
}