import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import DragableList from './component/DragableList';
// import TestDragableList from './component/TestDragableList';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(<DragableList />);
root.render(<App />);
// root.render(<App />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
