/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [todoList, setTodoList] = React.useState([
    {
      id: 0,
      item: "Learn React",
    },
    {
      id: 1,
      item: "learn vue",
    },
    {
      id: 2,
      item: "learn angular",
    },
  ]);

  const handleDelete = (list) => {
    const newTodoList = todoList.filter((item) => item.id !== list.id);
    setTodoList([...newTodoList]);
  };

  return (
    <main>
      <h1>React Todo List</h1>
      <input type="text" placeholder="Add item into as todo" />
      <button>Add</button>
      <ul>
        {todoList.map((list) => (
          <li key={list.id}>
            <input type="checkbox" />
            <span>{list.item}</span>
            <button onClick={() => handleDelete(list)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
