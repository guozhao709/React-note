/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  // 制作列表响应式数据
  const [todoList, setTodoList] = React.useState([
    {
      id: 0,
      item: "Learn React",
      checked: false,
    },
    {
      id: 1,
      item: "learn vue",
      checked: false,
    },
    {
      id: 2,
      item: "learn angular",
      checked: false,
    },
  ]);

  // 输入框响应式数据
  const [inputValue, setInputValue] = React.useState("");

  // 删去所选数据
  const handleDelete = (list) => {
    const newTodoList = todoList.filter((item) => item.id !== list.id);
    setTodoList([...newTodoList]);
  };


  const handleAdd = () => {
    let max = 0;
    todoList.forEach((item) => {
      item.id > max ? (max = item.id) : max;
    });

    setTodoList([...todoList, { id: max + 1, item: inputValue }]);
    // 不要忘记重新设置输入框
    setInputValue("");
  };

  const handleChecked = (list) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === list.id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    // setTodoList([...newTodoList]);

    // const newTodoList = todoList.filter((item) => {
    //   return item.id !== list.id;
    // });
    // newTodoList.push({
    //   ...list,
    //   checked: !list.checked,
    // });
    // setTodoList(newTodoList);

    // 排序, 正数表示往后排, 负数表示往前排
    newTodoList.sort((a, b) => {
      if(a.checked && !b.checked){
        return 1;
      }
      if(!a.checked && b.checked){
        return -1;
      }
      return 0;
    });

    setTodoList([...newTodoList]);
  };

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Add item into as todo"
      />
      <button onClick={() => handleAdd()}>Add</button>
      <ul>
        {todoList.map((list) => (
          <li key={list.id}>
            <input
              type="checkbox"
              checked={list.checked}
              onChange={() => handleChecked(list)}
            />
            <span className={`${list.checked ? "deleted" : ""}`}>
              {list.item}
            </span>
            {/* 删除按钮点击事件, 注意传的是函数, 而不是调用() */}
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
