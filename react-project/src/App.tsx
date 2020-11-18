import React from 'react';
import NewTodo from './component/NewTodo';
import TodoList from './component/TodoList';

export const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};
export default App;
