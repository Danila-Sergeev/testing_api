import React, { FC, useEffect, useState } from "react";
import "./App.css";

let user = {
  name: "Kirill",
  password: "denchic12",
};

/* alert(result.message); */
console.log("asdasd");
const App: FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("mongodb://localhost:27017/mestodb/cards")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  fetch("mongodb://localhost:27017/mestodb/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

  return (
    <div className="App">
      <title>{users}</title>
    </div>
  );
};

export default App;
