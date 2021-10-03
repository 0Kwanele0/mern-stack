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
    </div>
  );
}

export default Home;
