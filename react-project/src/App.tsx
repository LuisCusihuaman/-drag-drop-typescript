import React from 'react';
import NewTodo from './component/NewTodo';
import TodoList from './component/TodoList';

export const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};
export default App;
