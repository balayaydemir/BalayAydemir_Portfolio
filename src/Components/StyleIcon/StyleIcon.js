import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faQuoteLeft, 
  faQuoteRight,
  faUserFriends,
  faCode,
  faEnvelopeOpenText,
  faFile,
  faDumbbell,
  faHiking,
  faUtensils,
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const styleIconMap = {
  hamburger: <FontAwesomeIcon className="fa_bars" icon={faBars} />,
  close: <FontAwesomeIcon className="fa_times" icon={faTimes} />,
  leftQuote: <FontAwesomeIcon className="fa_quote_left" icon={faQuoteLeft} />,
  rightQuote: <FontAwesomeIcon className="fa_quote_right" icon={faQuoteRight} />,
  connect: <FontAwesomeIcon className="fa_user_friends" icon={faUserFriends} />,
  code: <FontAwesomeIcon className="fa_code" icon={faCode} />,
  email: <FontAwesomeIcon className="fa_email" icon={faEnvelopeOpenText} />,
  resume: <FontAwesomeIcon className="fa_resume" icon={faFile} />,
  dumbbell: <FontAwesomeIcon className="fa_dumbbell" icon={faDumbbell} />,
  hiking: <FontAwesomeIcon className="fa_hiking" icon={faHiking} />,
  utensils: <FontAwesomeIcon className="fa_utensils" icon={faUtensils} />,
  right: <FontAwesomeIcon className="fa_right" icon={faChevronRight} />,
  left: <FontAwesomeIcon className="fa_left" icon={faChevronLeft} />,
  default: null
}

export default function StyleIcon({ style = 'default' }) {
  return styleIconMap[style];
}