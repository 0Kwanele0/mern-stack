import { useState } from "react";
import axios from "axios";

function Create() {
  const [state, setState] = useState({
    name: "",
    surname: "",
    age: 0,
    identity: 0,
    job: "",
    salary: 0,
  });

  const changingValues = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const submiting = () => {
    const mydata = {
      name: state.name,
      surname: state.surname,
      age: state.age,
      identity: state.identity,
      job: state.job,
      salary: state.salary,
    };
    axios.post("http://localhost:2000/user/create", mydata);
  };
  const styles = {
    padding: 10,
    fontSize: 20,
    margin: 10,
  };
  return (
    <div className="App">
      <form onSubmit={submiting}>
        <input
          style={styles}
          value={state.name}
          onChange={changingValues}
          name="name"
          type="text"
        />
        <input
          style={styles}
          value={state.surname}
          onChange={changingValues}
          name="surname"
          type="text"
        />
        <input
          style={styles}
          value={state.age}
          onChange={changingValues}
          name="age"
          type="number"
        />
        <input
          style={styles}
          value={state.identity}
          onChange={changingValues}
          name="identity"
          type="number"
        />
        <input
          style={styles}
          value={state.job}
          onChange={changingValues}
          name="job"
          type="text"
        />
        <input
          style={styles}
          value={state.salary}
          onChange={changingValues}
          name="salary"
          type="text"
        />
        <button style={styles} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
