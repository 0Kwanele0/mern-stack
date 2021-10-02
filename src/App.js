import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [friend, setFriend] = useState("");
  const changingName = (e) => {
    setName(e.target.value);
  };
  const changingFriend = (e) => {
    setFriend(e.target.value);
  };
  const styles = {
    padding: 10,
    fontSize: 20,
    margin: 10,
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          style={styles}
          value={name}
          onChange={changingName}
          name="name"
          type="text"
        />
        <input
          style={styles}
          value={friend}
          onChange={changingFriend}
          name="friend"
          type="text"
        />
        <button style={styles} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
