import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Routes = [
  {
    display_name: "Home",
    route: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    display_name: "Message",
    route: "/message",
    icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
  },
];

export default Routes;
