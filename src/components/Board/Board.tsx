import React, { FC } from "react";
import "./Board.scss";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import Ticket from "../Ticket/Ticket";
import { useProject } from "../../context/projectContext";
import { BoardType, Task } from "../../types/types";

interface BoardProps {}

const Board: FC<BoardProps> = () => {
  const { currentProject, changeCurrentBoard } = useProject();

  function onDragend(result: any) {
    if (!result.destination) return;
    /* Drag Object */
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = currentProject.board[source.droppableId];
      const destinationColumn = currentProject.board[destination.droppableId];
      console.log(JSON.stringify(sourceColumn));

      /* Items */
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      /* Remove from col, add to new col */
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);

      /* Set state with new data */
      changeCurrentBoard({
        ...currentProject.board,
        [destination.droppableId]: {
          ...destinationColumn,
          items: [...destinationItems],
        },
        [source.droppableId]: {
          ...sourceColumn,
          items: [...sourceItems],
        },
      } as any);
    } else {
      const sourceColumn = currentProject.board[source.droppableId];
      const copiedItems = [...sourceColumn.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      /* Change state */
      changeCurrentBoard({
        ...currentProject.board,
        [source.droppableId]: {
          ...sourceColumn,
          items: [...copiedItems],
        },
      } as any);
    }
  }

  return (
    <div className='board'>
      <DragDropContext onDragEnd={(res) => onDragend(res)}>
        {Object.entries(currentProject.board).map(([id, column]: any, idx) => {
          return (
            <div id={String(idx)} key={id}>
              <Droppable key={id} droppableId={id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      data-active={snapshot.isDraggingOver.toString()}
                      className='board-column'>
                      <div className='board-title'>
                        <div
                          className={`board-title-icon ${column.name}`}></div>
                        <h4 className='heading-s'>{column.name}</h4>
                      </div>
                      {column.items.map((item: Task, idx: number) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={idx}>
                            {(provided, snapshot) => {
                              return (
                                <Ticket
                                  provided={provided}
                                  snapshot={snapshot}
                                  item={item}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Board;
