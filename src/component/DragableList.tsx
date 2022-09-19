import React from 'react';
// import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count: number) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  };
};

const getListStyle = (isDraggingOver: any) => {
  // console.log(isDraggingOver);

  return {
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
  };
};

export default function DragableList() {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       items: getItems(6),
  //     };
  //     this.onDragEnd = this.onDragEnd.bind(this);
  //   }

  // function onDragEnd(result) {
  // dropped outside the list
  // if (!result.destination) {
  //   return;
  // }
  // const items = reorder(
  //   this.state.items,
  //   result.source.index,
  //   result.destination.index
  // );
  // this.setState({
  //   items,
  // });
  // }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {getItems(6)?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // style={getItemStyle(
                    //   snapshot.isDragging,
                    //   provided.draggableProps.style
                    // )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
