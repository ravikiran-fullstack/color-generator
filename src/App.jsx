import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const colors = new Values('#9b2222').all(10);
  const [colorsList, setColorsList] = useState(colors);
  return (
    <div className="container">
      <h4>Color Generator Starter</h4>
      <Form setColorsList={setColorsList} />
      <ColorList colorsList={colorsList} />
      <ToastContainer position="top-center" />
    </div>
  );
};
export default App;
