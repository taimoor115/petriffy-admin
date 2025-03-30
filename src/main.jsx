import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "sonner";
import "./assets/css/satoshi.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/css/style.css";
import { AuthProvider } from "./context/auth";
import { ModalProvider } from "./context/modal";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <Toaster duration={2000} position="bottom-right" />
          <App />
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
