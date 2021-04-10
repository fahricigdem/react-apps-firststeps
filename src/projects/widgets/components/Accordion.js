import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [active, setActive] = useState(['active', '', '']);

  const onTitleClick = (index) => {
    const new_active = [] // const new_active = [...active] ---> so more than one question can be openned
    new_active[index] = active[index] === 'active' ? '' : 'active'
    setActive(new_active)
  }

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active[index]}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active[index]}`} >
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
