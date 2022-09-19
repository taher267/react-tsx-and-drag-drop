import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const items = [
  { id: Date.now(), txt: `text- A` },
  { id: Date.now(), txt: `text- B` },
  { id: Date.now(), txt: `text- C` },
  { id: Date.now(), txt: `text- F` },
  { id: Date.now(), txt: `text- E` },
  { id: Date.now(), txt: `text- D` },
];
const TestDragableList: React.FC = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <div>
          <Droppable direction="horizontal" droppableId="droppable-ol">
            {(drop, st) => (
              <div
                style={{
                  gap: '4px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                }}
                ref={drop.innerRef}
                {...drop.droppableProps}
              >
                {items.map((im, i) => (
                  <Draggable
                    draggableId={(im.id + i).toString()}
                    index={i}
                    key={im.id + i}
                  >
                    {(drag) => (
                      <div
                        ref={drag.innerRef}
                        {...drag.draggableProps}
                        {...drag.dragHandleProps}
                      >
                        <div
                          style={{
                            background: 'red',
                            borderBottom: '1px solid',
                            marginBottom: '5px',
                          }}
                        >
                          {im.txt}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {drop.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};
export default TestDragableList;
