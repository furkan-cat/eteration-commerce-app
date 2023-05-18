import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductLayout from "./layouts/ProductLayout";
import AppLayout from "./layouts/AppLayout";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<ProductLayout />}>
            <Route index element={<Products />} />
          </Route>
          <Route path="/products" element={<Navigate to="/" />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
