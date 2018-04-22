import React from 'react';
import ReactDOM from 'react-dom';
import ITU from './ITU';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ITU />, div);
});
