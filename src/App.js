import React, { useEffect, useState } from "react";
import "./App.css";
import { Comp } from "./components/Comp";
import axios from "axios";
import { Link } from "react-router-dom";
import { Information } from "./router/router";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert(
        "your request failed, please check your network connection, and try again later."
      );
    }
  };
  useEffect(() => {
    getData();
    console.log("asd");
  }, []);
  return (
    <div className="App">
      <div className="row">
        {data.map((post) => (
          <Comp
            image={post.image}
            tags={post.tags}
            text={post.text}
            userImage={post.owner.picture}
            userFirstName={post.owner.firstName}
            userLastName={post.owner.lastName}
            date={post.publishDate}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
