import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";

export default function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <Router base={base}>
      <FileRoutes />
    </Router>
  );
}
