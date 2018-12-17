import React from 'react';

export const ClearBtn = props => (
  <div className="clearBtn" onClick={props.handleClear}>
    {props.children}
  </div>
)