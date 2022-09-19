import React from 'react';
import './App.css';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import InputForm from './component/InputForm';
import TodoList from './component/TodoList';
import { Todo } from './utils/model';
// import csses from './component/styles.module.css';

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);
  // const inputRef = React.useRef<HTMLInputElement>(null);
  // console.log(todos);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((p) => [...p, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };
  const [completedTodos, setCompletedTodos] = React.useState<Todo[]>([]);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId === 'todoListAdd') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'todoListAdd') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setTodos(active);
    setCompletedTodos(complete);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="teskify">teskify</span>
        <InputForm
          todo={todo}
          setTodo={setTodo}
          // inputRef={inputRef}
          submit={(e) => handleAdd(e)}
        />
        <hr />
        <TodoList
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
