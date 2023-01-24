import React, { useContext } from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { useProject } from "../../context/projectContext";

const Board = () => {
  const { currentProject }: any = useProject();

  return (
    <div className='board'>
      {currentProject.board.map((column: any) => (
        <div key={column.name} className='board-column'>
          <div className='board-title'>
            <div className={"board-title-icon " + column.name}></div>
            <h2>{column.name}</h2>
          </div>
          {column.tickets.map((ticket: any) => (
            <Ticket key={ticket.id} item={ticket}></Ticket>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
