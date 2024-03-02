import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from "./jsx components/Intro-page"
import InfoPage from "./jsx components/Info-page";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <IntroPage /> },
    { path: "/info-page", element: <InfoPage/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
