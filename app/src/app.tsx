import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";

export default function App() {
  const routerBase = (import.meta as any).env.APP_BASE_PATH as string;
  const base = routerBase === "/" ? undefined : routerBase;

  return (
    <Router base={base} root={(props) => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
    </Router>
  );
}
