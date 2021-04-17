import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/react-apps-firststeps" className="item">
        Accordion
      </Link>
      <Link href="/react-apps-firststeps/list" className="item">
        Search
      </Link>
      <Link href="/react-apps-firststeps/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/react-apps-firststeps/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
