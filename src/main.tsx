import "antd/dist/antd.css";
import "./global.css";

import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
