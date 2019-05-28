import React from 'react';
import './App.css';
import ButtonTS from './ButtonTS'
import {DesignComponentExample, CodeComponentExample} from 'framer-design';

function App() {
  return (
    <div className="App">
      <div>This is the app</div>
      <h6>TSX Component</h6>
      <ButtonTS />
      <h6>Design Component</h6>
      { /* <DesignComponentExample /> // This will cause a "Element type is invalid: expected a string" error */ }
      <h6>Code Component</h6>
      { /* <CodeComponentExample /> // This will cause a "Element type is invalid: expected a string" error */ }
    </div>
  );
}

export default App;
