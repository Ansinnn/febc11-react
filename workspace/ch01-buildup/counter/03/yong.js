const yong = {
  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성
  // <button type="button" onclick="handleUp()">+</button>
  // const props = { type: "button", onclick: "handleUp()", "+"}
  createElement: (tag, props, ...childeren) => {

    const elem = document.createElement(tag)

    // 속성 추가
    if(props){
      for(const attrName in props){
        elem.setAttribute(attrName, props[attrName])
      }
    }

    // 자식 노드 추가
    for(let child of childeren){
      if(typeof child === 'string'|| typeof child === 'number'){
        child = document.createTextNode(child)
      }
      elem.appendChild(child)
    }
    return elem;
  }
}

export default yong;