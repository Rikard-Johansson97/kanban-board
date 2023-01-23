import React, { useState } from "react";
import "./Ticket.scss";

interface TicketProps {
  item: {
    id: number;
    title: string;
    description: string;
    tasks: string[];
  };
}

const Ticket = ({ item }: TicketProps) => {
  const [showLists, setShowLists] = useState(false);

  console.log(item);

  return (
    <div
      className='ticket'
      onClick={() => setShowLists((currentValue) => !currentValue)}>
      <h3 className='heading-m'>{item.title}</h3>
      <p className='body-m'>{item.description}</p>
      <p className='body-m'>{item.tasks.length} subtasks</p>
      {showLists && (
        <ul>
          {item.tasks
            ? item.tasks.map((task, i) => <li key={i}>{task}</li>)
            : null}
        </ul>
      )}
    </div>
  );
};

export default Ticket;
