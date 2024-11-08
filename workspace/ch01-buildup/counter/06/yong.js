
const yong = (() => {
  let _root;
  let _stateValue;

  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성
  // <button type="button" onclick="handleUp()">+</button>
  // const props = { type: "button", onclick: "handleUp()", "+"}
  const createElement = (tag, props, ...childeren) => {
    const elem = document.createElement(tag)

    // 속성 추가
    if(props){
      for(const attrName in props){
        const value = props[attrName]
        if(attrName.toLowerCase().startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2), value)
        } else {
          elem.setAttribute(attrName, value)
        }
      }
    }

    // 자식 노드 추가
    for(let child of childeren){
      if(typeof child === 'string'|| typeof child === 'number'){
        child = document.createTextNode(child)
      } else if(typeof child === 'function'){
        child =child()
      }
      elem.appendChild(child)
    }
    return elem;
  };

  // 루트노드를 관리하는 객체를 생성해서 반환
  // createRoot(document.getElementById('root')).render(App)
  // 클로저에 의해 내부함수는 계속 살아있어 return에서 쓸 수 있음
  // 원래 함수 끝나면 rootNode 사라지고 return에서 못 씀
  const createRoot = (rootNode) => {
    let _appComponent;
    return _root = {
      // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        _appComponent = _appComponent || appFn;
        if(rootNode.firstChild){
          rootNode.firstChild.remove();
        }
        rootNode.appendChild(_appComponent())
      }
    }
  };

  // 상태값 관리
  // let [count, setCount] = Yong.useState(10);
  const useState = (initValue) => {
    // 최초에 한번만 initValue 값으로 저장하고 useState가 다시 호출되면 initValue는 무시하고 저장된 값을 사용
    if(_stateValue == undefined){
      // 최초 useState 호출될때 한번만 실행
      _stateValue = initValue
    }

    // setValue(10)
    function setValue(newValue){
      const oldValue = _stateValue //10
      _stateValue = newValue //11
      
      if(!Object.is(oldValue, newValue)){
        _root.render()
      }
    }

    return [_stateValue, setValue];
  };
  return {createElement, createRoot, useState};
})();

export default yong;