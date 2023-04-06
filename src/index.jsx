import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provedor } from "./context";
import React from 'react'
const root = createRoot(document.querySelector("#root"));

root.render(
   <React.StrictMode>
      <Provedor>
         <App />
      </Provedor>
   </React.StrictMode>

);