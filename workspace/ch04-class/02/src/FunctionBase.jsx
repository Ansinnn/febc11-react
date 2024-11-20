import PropTypes from "prop-types";
import { Component, useState } from "react";

function ClickMe() {

  const [count, setCount] = useState(level || 1)

  handleClick = () => {
    setCount(count + (level || 1)) //props 접근할때 this 쓰면됨
  }

  render() {
    return (
      <div>
        클릭 횟수 x { this.props.level || 1 }: { this.state.count }
        <button onClick={ this.handleClick }>클릭</button>
      </div>
    );
  }
}

ClickMe.propTypes = {
  level: PropTypes.number
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
      </div>
    );
  }
}

export default Parent;