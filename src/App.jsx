import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductLayout from "./pages/ProductLayout";
import { Navbar } from "./components";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<ProductLayout />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/products" element={<Navigate to="/" />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
    )
  );

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};
