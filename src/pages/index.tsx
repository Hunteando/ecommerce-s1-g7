import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './index.css';
import Menu from 'component/Menu';
import { Navbar } from "component/Navbar";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <menu/>
        <Navbar/>
      </StyledEngineProvider>
    </React.StrictMode>
  );

