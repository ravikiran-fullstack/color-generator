import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ index, hex, weight }) => {
  console.log(hex, weight, index);

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color copied to clipboard');
      } catch (error) {
        console.log(error);
        toast.error('color not copied to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <div
      className="color-light"
      style={{
        background: `#${hex}`,
      }}
      onClick={saveToClipboard}
    >
      {weight}
      <div>#{hex}</div>
    </div>
  );
};

export default SingleColor;
