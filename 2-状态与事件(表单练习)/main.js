function App() {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
