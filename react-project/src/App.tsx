import React, { useState } from 'react';
import NewTodo from './component/NewTodo';
import { Todo } from './component/todo.model';
import TodoList from './component/TodoList';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text }]);
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};
export default App;
