import React from 'react';
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  submit: (e: React.FormEvent) => void;
  // inputRef: HTMLInputElement;
}

const InputForm: React.FC<Props> = ({
  todo,
  setTodo,
  submit,
}: // inputRef,
Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        submit(e);
        inputRef?.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        style={{ textTransform: 'capitalize' }}
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        name="taks"
        placeholder="Enter a task"
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputForm;
