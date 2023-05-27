import React from 'react';
import { toast } from 'react-toastify';
import SingleColor from './SingleColor';

const ColorList = ({ colorsList }) => {
 

  return (
    <div className="colors">
      {colorsList.map((color, index) => {
        const { hex, weight } = color;
        return (
          <SingleColor index={index} key={hex} hex={hex} weight={weight} />
        );
      })}
    </div>
  );
};

export default ColorList;
