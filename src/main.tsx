import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryParamsProvider } from "./context/QueryParamsContext/QueryParamsContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryParamsProvider>
        <App />
      </QueryParamsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
