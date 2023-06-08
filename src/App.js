import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCouenter";
import "./App.css";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreatTodoButton";

function App() {
  return (
    <div className="App">
      <TodoCounter />
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
