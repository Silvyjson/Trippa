import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from "./jsx components/Pages/Intro-page";
import InfoPage from "./jsx components/Pages/Info-page";
import SignUp from "./jsx components/Pages/Sign-up";
import SignIn from "./jsx components/Pages/Sign-in";
import ResetPassword from "./jsx components/Pages/ResetPassword";
import Homepage from "./jsx components/Pages/Homepage";
import MessagePage from "./jsx components/Pages/MessagePage";
import ViewMessage from "./jsx components/Message_page_Routes/ViewMessage";
import NotificationPage from "./jsx components/Pages/NotificationPage";
import FavouritePage from "./jsx components/Pages/FavouritePage";
import User_ProfilePage from "./jsx components/Home_Page_Routes/User_ProfilePage";
import Saved_TripsPage from "./jsx components/Home_Page_Routes/Saved_TripsPage";

function App() {

  const router = createBrowserRouter([

    { path: "/", element: <IntroPage /> },
    { path: "/info-page", element: <InfoPage /> },
    { path: "/signUp-page", element: <SignUp /> },
    { path: "/signIn-page", element: <SignIn /> },
    { path: "/resetPassword-page", element: <ResetPassword /> },
    { path: "/home-page", element: <Homepage /> },
    { path: "/message-page", element: <MessagePage /> },
    { path: "/view_message-page", element: <ViewMessage /> },
    { path: "/notification-page", element: <NotificationPage /> },
    { path: "/favourite-page", element: <FavouritePage /> },
    { path: "/user_profile-page", element: <User_ProfilePage /> },
    { path: "/saved_trips-page", element: <Saved_TripsPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
