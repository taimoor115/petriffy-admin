import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App";
import "./assets/css/satoshi.css";
import "./assets/css/style.css";
import { AuthProvider } from "./context/auth";
import { ModalProvider } from "./context/modal";
import { queryClient } from "./utils/query-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ModalProvider>
        <Toaster duration={2000} position="bottom-right" />
        <App />
        <ReactQueryDevtools />
      </ModalProvider>
    </AuthProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
