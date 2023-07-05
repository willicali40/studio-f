import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "../../Context/index";
import Navbar from "../../Components/Navbar/index";
import Home from "../Home";
import Products from "../../Components/Products/index";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
    ]);
    return routes;
  };

  return (
    <ShoppingProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
