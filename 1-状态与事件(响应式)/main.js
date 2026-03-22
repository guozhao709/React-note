function App() {

  // 定义响应式变量
  const [text, setText] = React.useState("");

  // 更新响应式变量
  const handleChange = (event)=>{
    const changedText = event.target.value;
    setText(changedText);
  }


  return (
    <>
      <h1>hello, from react;</h1>
      {/* 绑定响应式变量 */}
      <input type="text" onChange={handleChange}></input>
      <p>{text}</p>
    </>
  );
}


const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);