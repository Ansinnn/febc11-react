import PropTypes from 'prop-types';
import './Button.css';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(['gray','blue', 'red', 'yellow']), // 글자 색상
  bg: PropTypes.oneOf(['black', 'red', 'yellow', 'blue']), // 배경 색상
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};

export default function Button({ children, bg="gray", color="black", size="md", ...rest }){
  let bgColor = {
    gray: 'bg-gray-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  }
  let textColor = {
    black: 'text-black',
    blue: 'text-blue',
    red: 'text-red-500',
    yellow: 'text-yellow-500',
  }
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  }

  // return <button className={ `button color-${bg}-${color}` } type={ type } onClick={ clickHandler }>{ children }</button>
  return <button className={ `${bgColor[bg]} ${textColor[color]}  ${btnSize[size]} m-1 rounded-md` } {...rest}>{ children }</button>
}