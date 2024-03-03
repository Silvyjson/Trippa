import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from "./jsx components/Intro-page"
import InfoPage from "./jsx components/Info-page";
import SignUp from "./jsx components/Sign-up";
import SignIn from "./jsx components/Sign-in";
import ResetPassword from "./jsx components/ResetPassword";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <IntroPage /> },
    { path: "/info-page", element: <InfoPage/>},
    { path: "/signUp-page", element: <SignUp/>},
    { path: "/signIn-page", element: <SignIn/>},
    { path: "/resetPassword-page", element: <ResetPassword/>},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
