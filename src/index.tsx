import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root: any = document.getElementById("root");
const mainRoot = createRoot(root);

mainRoot.render(<App />);
