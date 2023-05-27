import React, { useState } from 'react';
import Values from 'values.js';

import { toast } from 'react-toastify';

const Form = ({ setColorsList }) => {
  const [color, setColor] = useState('');

  const changeColor = (e) => {
    e.preventDefault();
    if (!color) {
      toast('please enter a hex code for color');
      return;
    }
    if (color.length > 7) {
      return;
    }
    try {
      const newColors = new Values(`${color}`).all(10);
      setColorsList(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form onSubmit={changeColor} className="color-form">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        name="color"
        id="color"
        className="text-input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#f2de2d"
      />
      <button type="submit" className="btn" style={{ background: color }}>
        Generate
      </button>
    </form>
  );
};

export default Form;
