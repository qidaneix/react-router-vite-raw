import "./index.css";
import App from "./App";
import Bpp from "./Bpp";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import { useCacheRoutes } from "./utils/CacheRoutes";

export function Root() {
  return useCacheRoutes([
    {
      path: "/",
      element: <App />,
      cache: true,
      children: [
        { path: "expenses", element: <Expenses />, cache: true },
        {
          path: "invoices",
          element: <Invoices />,
          cache: true,
          children: [{ path: ":id", element: <Invoice />, cache: false }],
        },
        {
          path: "*",
          element: (
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          ),
        },
      ],
    },
    { path: "/bpp", element: <Bpp />, cache: false },
  ]);
}
