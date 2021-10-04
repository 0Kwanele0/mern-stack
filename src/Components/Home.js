import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function Home() {
  const [myusers, setMyusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/user").then((users) => {
      const data = users.data;
      setMyusers(data);
    });
  }, []);

  return (
    <div className="App">
      {myusers.length > 0 ? (
        <div className="data">
          {myusers.map((item, key) => {
            return (
              <div className="indi" key={key}>
                <p>{item.name}</p>
                <a href={`/${item._id}`}>Edit</a>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>If you have users, They should appear Here!</h1>
          <a
            href="/create"
            style={{
              padding: "15px 30px",
              margin: 10,
              fontSize: 16,
              fontWeight: 600,
              backgroundColor: "dodgerblue",
              color: "white",
              border: 0,
              textDecoration: 0,
            }}
          >
            Add User
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
