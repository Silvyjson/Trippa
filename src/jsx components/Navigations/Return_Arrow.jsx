import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const Return_Arrow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let content;
  switch (location.pathname) {
    case "/message-page":
      content = "Message";
      break;
    case "/notification-page":
      content = "Notification";
      break;
    case "/favourite-page":
      content = "Favourite";
      break;
    case "/saved_trips-page":
      content = "Saved Trips";
      break;
    default:
      content = "";
      break;
  }

  return (
    <div className="flex gap-[40%] items-center p-[20px] bg-page_color fixed top-0 h-[80px] w-full text-[18px] lg:w-[1000px]">
      <FontAwesomeIcon
        icon="fa-solid fa-arrow-left"
        onClick={() => {
          navigate("/home-page");
        }}
        className="cursor-pointer"
      />
      {content}
    </div>
  );
};

export default Return_Arrow;
