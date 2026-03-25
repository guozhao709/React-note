import { useState } from "react";
import MyInput from "./components/MyInput";
import MyButton from "./components/MyButton";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameClass =
    username.length <= 2 && username.length > 0 ? "input-error" : "";
  const passwordClass =
    password.length <= 2 && password.length > 0 ? "input-error" : "";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass.length > 0 || passwordClass.length > 0) {
      alert("Invalid username or password");
      return;
    }

    alert(`Username: ${username} Password: ${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* 传递props(父子组件通信) */}
        <MyInput uValue={username} setUvalue={setUsername} uClass={usernameClass} uType="text" />
        <br />
        <MyInput uValue={password} setUvalue={setPassword} uClass={passwordClass} uType="password" />

        <br />
        {/* children 用法 */}
        <MyButton >Login</MyButton>
        <MyButton >Register</MyButton>
      </form>
    </main>
  );
}

export default App;