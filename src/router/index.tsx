import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { NotFoundPage } from "../components/NotFoundPage"
import { IndexScreen } from "./web/newIndex"
import { GameScreen } from "./subpage/game"
import { EComScreen } from "./subpage/e-com"
import { CardScreen } from "./subpage/card"
import { ComScreen } from "./subpage/com"
const routers = createBrowserRouter([
  {
    path: "/",
    element: <IndexScreen />,
  },
  {
    path: "/game",
    element: <GameScreen />,
  }, {
    path: "/ecommerce",
    element: <EComScreen />,
  }, {
    path: "/cryptocard",
    element: <CardScreen />,
  },
  {
    path: "/com",
    element: <ComScreen />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
const App = () => {

  return <RouterProvider router={routers} />;
}

export default App