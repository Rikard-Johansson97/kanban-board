import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";

const Board = () => {
  return (
    <div className='board'>
      <div className='board-column'>
        <div className='board-title'>
          <div className='board-title-icon'></div>
          <h2>Todo</h2>
        </div>
        <Ticket
          item={{
            id: 1,
            title: "This is a ticket",
            description: "This is a description",
            tasks: ["Hoppa 1 gång", "rasta hunden"],
          }}
        />
      </div>
      <div className='board-column'>
        <div className='board-title'>
          <div className='board-title-icon'></div>
          <h2>Doing</h2>
        </div>
      </div>
      <div className='board-column'>
        <div className='board-title'>
          <div className='board-title-icon'></div>
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
};

export default Board;
