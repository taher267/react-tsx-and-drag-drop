import React from 'react';
import { Todo } from '../utils/model';
import { Draggable } from 'react-beautiful-dnd';
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);
  const handleDone = (done: number) => {
    setTodos(
      todos.map((t) => (done === t.id ? { ...todo, isDone: !t.isDone } : t))
    );
  };

  const handleDel = (id: number) => {
    setTodos(todos.filter((t) => id !== t.id));
  };

  const handleEdit = (id: number) => {
    if (!edit && !todo?.isDone) {
      setEdit(!edit);
    }

    // else {
    //   setEdit(false);
    // }
  };
  const handleEditHandle = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => (todo.id === t.id ? { ...todo, todo: editTodo } : t))
    );
    setEdit(false);
  };
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);
  return (
    // <Draggable draggableId={todo.id.toString()} index={index}>
    //   {(drag) => (
    <form
      onSubmit={(e) => handleEditHandle(e, todo.id)}
      style={{
        background: '#dddddd48',
        padding: '5px 10px',
        marginBottom: '5px',
        borderBottom: '1px solid #f3f3f3',
      }}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={({ target: { value } }) => {
            setEditTodo(value);
            // setTodos(
            //   todos.map((t) =>
            //     todo.id === t.id ? { ...todo, todo: value } : t
            //   )
            // );
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.isDone === true ? 'line-through' : '',
          }}
        >
          {todo.todo}
        </span>
      )}
      -------------
      {/* {console.log(todo.id)} */}
      <span
        onClick={() => handleEdit(todo.id)}
        style={{
          textDecoration: todo.isDone === true ? 'line-through' : '',
          border: '1px solid orange',
          background: 'orange',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        Edit
      </span>{' '}
      <span
        style={{ background: todo.isDone === true ? 'green' : 'orange' }}
        onClick={() => handleDone(todo.id)}
      >
        Done
      </span>{' '}
      | <span onClick={() => handleDel(todo.id)}>Del</span>
    </form>
    //   )}
    // </Draggable>
  );
};
export default SingleTodo;
