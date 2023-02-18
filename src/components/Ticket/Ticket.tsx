import { DraggableProvided } from "@hello-pangea/dnd";
import React, { useState, FC } from "react";
import { ProvidedObject, Snapshot, Task } from "../../types/types";
import "./Ticket.scss";

interface TicketProps {
  provided: DraggableProvided;
  snapshot: Snapshot;
  item: Task;
}

const Ticket: FC<TicketProps> = ({ provided, snapshot, item }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-active={snapshot.isDragging.toString()}
      className='ticket'
      onClick={() => setShowList((currentValue) => !currentValue)}>
      <h3 className='heading-m'>{item.title}</h3>
      <p className='body-m'>{item.description}</p>
      <p className='body-m'>{item.tasks.length} subtask</p>
      {showList && (
        <ul>
          {item.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ticket;
