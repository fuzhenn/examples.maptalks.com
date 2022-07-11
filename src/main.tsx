import "antd/dist/antd.css";
import "./global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
