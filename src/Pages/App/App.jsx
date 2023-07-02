import { useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from "../../Components/Navbar/index";
import Home from "../Home";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([{ path: "/", element: <Home /> }]);
    return routes;
  };

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
