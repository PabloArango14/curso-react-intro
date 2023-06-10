import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import "./App.css";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreatTodoButton";

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
