import React from 'react';
import ReactDOM from 'react-dom/client';
// import Parent from './fragments/Parent';
import './index.css';
import FunctionalComponent from './Ref/FunctionalComponent';
// import App from './portal/App';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import ClassComponent from './components/ClassComponent';
// import Parent from './Props/Functions/Parent';
// import Parent from './Props/Class/Parent';
// import App from './styles/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionalComponent/>
    {/* <App/> */}
    {/* <ClassComponent/> */}
    {/* <FunctionalComponent/> */}
    {/* <Parent/> */}
    {/* <Parent/> */}
  </React.StrictMode>
);
