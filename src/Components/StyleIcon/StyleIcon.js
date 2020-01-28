import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faQuoteLeft, 
  faQuoteRight
} from '@fortawesome/free-solid-svg-icons';

const styleIconMap = {
  hamburger: <FontAwesomeIcon className="fa_bars" icon={faBars} />,
  close: <FontAwesomeIcon className="fa_times" icon={faTimes} />,
  leftQuote: <FontAwesomeIcon className="fa_quote_left" icon={faQuoteLeft} />,
  rightQuote: <FontAwesomeIcon className="fa_quote_right" icon={faQuoteRight} />,
  default: null
}

export default function StyleIcon({ style = 'default' }) {
  return styleIconMap[style];
}