import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "../../Context/index";
import Navbar from "../../Components/Navbar/index";
import Home from "../Home";
import Products from "../../Components/Products/index";
import CheckoutSide from "../../Components/CheckoutSide";
import Payment from "../Payment";
import Error404 from "../Error404";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/payment", element: <Payment /> },
      { path: "/404", element: <Error404 /> },
    ]);
    return routes;
  };

  return (
    <ShoppingProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSide />
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
