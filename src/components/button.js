import React from 'react';

function isOperator(val) {
  return isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
  <div className={`button-wrapper ${isOperator(props.children) ? "operator" : null }`} onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
)