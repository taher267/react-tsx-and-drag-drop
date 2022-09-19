import React from 'react';
import { Todo } from './../utils/model';
import SingleTodo from './SingleTodo';
import csses from './styles.module.css';
import { Draggable, Droppable } from 'react-beautiful-dnd';
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className={csses.container}>
      <Droppable droppableId="todoListAdd" direction="vertical">
        {(drop, snap) => (
          <div
            className={`${csses.incompleted_todo} ${
              snap.isDraggingOver ? 'dragactive' : ''
            }`}
            style={{ border: '3px solid' }}
            ref={drop.innerRef}
            {...drop.droppableProps}
          >
            <h4>Incompleted Todos</h4>
            {todos.map((t, i) => (
              <Draggable index={i} key={t.id} draggableId={t.id.toString()}>
                {(drag) => (
                  <div
                    ref={drag.innerRef}
                    {...drag.draggableProps}
                    {...drag.dragHandleProps}
                  >
                    {i}
                    <SingleTodo
                      key={t.id}
                      todo={t}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {drop.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todoListremove" direction="vertical">
        {(drop, snap) => (
          <div
            className={`${csses.incompleted_todo} ${
              snap.isDraggingOver ? 'dragremove' : ''
            }`}
            style={{ border: '3px solid' }}
            ref={drop.innerRef}
            {...drop.droppableProps}
          >
            <h4>Completed Todos</h4>
            {completedTodos.map((t, i) => (
              <Draggable index={i} key={t.id} draggableId={t.id.toString()}>
                {(drag, snap) => (
                  <div
                    style={{
                      display: snap.isDragging ? 'none' : '',
                    }}
                    ref={drag.innerRef}
                    {...drag.draggableProps}
                    {...drag.dragHandleProps}
                  >
                    {/* {JSON.stringify(snap)} */}
                    <SingleTodo
                      key={t.id}
                      todo={t}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {drop.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default TodoList;
