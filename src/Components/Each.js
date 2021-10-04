import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function Each() {
  const [data, setdata] = useState("");
  const { id } = useParams();
  const History = useHistory();
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    name: data.name,
    surname: data.surname,
    age: data.age,
    identity: data.identity,
    job: data.job,
    salary: data.salary,
  });

  const changingValues = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const submiting = (e) => {
    const mydata = {
      name: state.name,
      surname: state.surname,
      age: state.age,
      identity: state.identity,
      job: state.job,
      salary: state.salary,
    };
    axios.put(`http://localhost:2000/user/${id}`, mydata);
  };
  const styles = {
    padding: 10,
    fontSize: 20,
    margin: 10,
  };
  const deleting = async (e) => {
    await axios
      .delete(`http://localhost:2000/user/${id}`)
      .then(History.push("/"));
  };

  useEffect(() => {
    axios.get(`http://localhost:2000/user/${id}`).then((users) => {
      const data = users.data;
      setdata(data);
    });
  }, [id]);

  return (
    <div style={{ display: "flex" }} className="App">
      <div style={{ width: "50%" }} className="each">
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Name:</h4> {data.name}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Surname:</h4>{" "}
          {data.surname}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Age:</h4> {data.age}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Id:</h4> {data.identity}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Job:</h4> {data.job}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: 0, marginRight: 10 }}>Salary:</h4> {data.salary}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditing(!editing);
          }}
          style={{
            padding: 20,
            fontSize: 16,
            fontWeight: 600,
            backgroundColor: "green",
            color: "white",
            border: 0,
            margin: 10,
          }}
        >
          Edit User
        </button>
        <button
          onClick={deleting}
          style={{
            padding: 20,
            margin: 10,
            fontSize: 16,
            fontWeight: 600,
            backgroundColor: "red",
            color: "white",
            border: 0,
          }}
        >
          Delete User
        </button>
      </div>
      {editing && (
        <form onSubmit={submiting}>
          <input
            style={styles}
            value={state.name}
            onChange={changingValues}
            name="name"
            type="text"
            placeholder={data.name}
          />
          <input
            style={styles}
            value={state.surname}
            onChange={changingValues}
            name="surname"
            type="text"
            placeholder={data.surname}
          />
          <input
            style={styles}
            value={state.age}
            onChange={changingValues}
            name="age"
            type="number"
            placeholder={data.age}
          />
          <input
            style={styles}
            value={state.identity}
            onChange={changingValues}
            name="identity"
            type="number"
            placeholder={data.identity}
          />
          <input
            style={styles}
            value={state.job}
            onChange={changingValues}
            name="job"
            type="text"
            placeholder={data.job}
          />
          <input
            style={styles}
            value={state.salary}
            onChange={changingValues}
            name="salary"
            type="number"
            placeholder={data.salary}
          />
          <button style={styles} type="submit">
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default Each;
