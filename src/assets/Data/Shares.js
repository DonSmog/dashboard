import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faUsers,
  faGifts,
  faHiking,
  faWalking,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

const Shares = [
  {
    display_name: "Ranking",
    route: "/ranking",
    icon: <FontAwesomeIcon icon={faSortAmountUp} />,
  },
  {
    display_name: "Challenge",
    route: "/challenge",
    icon: <FontAwesomeIcon icon={faHiking} />,
  },
  {
    display_name: "Party",
    route: "/party",
    icon: <FontAwesomeIcon icon={faGifts} />,
  },
  {
    display_name: "Connect",
    route: "/connect",
    icon: <FontAwesomeIcon icon={faLink} />,
  },
  {
    display_name: "Parade",
    route: "/parade",
    icon: <FontAwesomeIcon icon={faWalking} />,
  },
  {
    display_name: "Group",
    route: "/group",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
];

export default Shares;
