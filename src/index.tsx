import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "sanitize.css";

async function mountApp() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mock/browser");
    await worker.start({
      onUnhandledRequest: "warn",
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mountApp();
