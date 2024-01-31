import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FilesProvider } from "./context/files.tsx";
import { StatusProvider } from "./context/status.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StatusProvider>
    <FilesProvider>
      <App />
    </FilesProvider>
  </StatusProvider>
);
