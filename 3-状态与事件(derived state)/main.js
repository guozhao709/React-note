// 逻辑: 当密码输入小于8个字符时, input框为red

function App() {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  // derived state(类似于vue3的computed), 基于state变量得到
  const userPasswordClass =
    userPassword.length < 8 && userPassword.length !== 0 ? "input-error" : "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userPassword.length < 8) {
      alert("密码过短, 请重新输入");
      return;
    }

    alert(`
      userName: ${userName};
      userPassword: ${userPassword}.
      `);

    setUserName("");
    setUserPassword("");
  };

  return (
    <>
      <main
        style={{
          border: "1px solid #000",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Login form</h1>
          <input
            style={{
              margin: "10px",
            }}
            placeholder="userName"
            type="text"
            // 实现双向绑定
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          ></input>
          <br />
          <input
            style={{
              margin: "10px",
            }}
            className={userPasswordClass}
            placeholder="userPassword"
            type="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          ></input>
          <br />
          <button type="submit">点我登录</button>
        </form>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
