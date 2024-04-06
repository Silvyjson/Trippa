import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from "./jsx components/Pages/Intro-page"
import InfoPage from "./jsx components/Pages/Info-page";
import SignUp from "./jsx components/Pages/Sign-up";
import SignIn from "./jsx components/Pages/Sign-in";
import ResetPassword from "./jsx components/Pages/ResetPassword";
import Homepage from "./jsx components/Homepage";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <IntroPage /> },
    { path: "/info-page", element: <InfoPage/>},
    { path: "/signUp-page", element: <SignUp/>},
    { path: "/signIn-page", element: <SignIn/>},
    { path: "/resetPassword-page", element: <ResetPassword/>},
    {path: "/home-page", element: <Homepage/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
