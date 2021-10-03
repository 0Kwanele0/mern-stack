import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Each() {
  const [data, setdata] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/user/${id}`).then((users) => {
      const data = users.data;
      setdata(data);
    });
  }, [id]);

  return (
    <div className="App">
      <div className="each">
        <h1>Individual</h1>
        <p>{data.name}</p>
        <p>{data.surname}</p>
        <p>{data.age}</p>
        <p>{data.identity}</p>
        <p>{data.job}</p>
        <p>{data.salary}</p>
      </div>
    </div>
  );
}

export default Each;
