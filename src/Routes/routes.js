import HomePage from "../Pages/HomePage/Home";
import NotFoundPage from "../Components/404Page/NotFoundPage";
import AllProductsPage from "../Pages/AllProductsPage/AllProductsPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import ShoppingCartPage from "../Pages/ShoppingCartPage/ShoppingCartPage";
import Product from "../Pages/ProductPage/Product";

const routes = [
  { id: 1, element: <HomePage />, path: "/" },
  { id: 2, element: <NotFoundPage />, path: "*" },
  { id: 3, element: <AllProductsPage />, path: "/products" },
  { id: 4, element: <CheckoutPage />, path: "/checkout" },
  { id: 5, element: <LoginPage />, path: "/login" },
  { id: 6, element: <SignupPage />, path: "/signup" },
  { id: 7, element: <ShoppingCartPage />, path: "/cart" },
  { id: 8, element: <Product />, path: "/products/product/:id" },
];

export default routes;
