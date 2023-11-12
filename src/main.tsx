import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

const root = document.getElementById("root");

if (root) {
//   // @ts-ignore
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  );
}
