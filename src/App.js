import Home from "./Components/Home";
import About from "./Components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import SignInPage from "./Components/signin";
import Business from "./Components/Business";
import Payment from "./Components/Payment";
import Booking from "./Components/Booking";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <SignInPage/>,
  },
  {
    path: "/Business",
    element: <Business/>,
  },
  {
    path: "/Payment",
    element: <Payment/>,
  },
  {
    path: "/Booking",
    element: <Booking/>,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;