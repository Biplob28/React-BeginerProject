import { useState } from "react";
import UserBar from "./components/userBar";
import UserList from "./components/userList";

function App() {
  const [info, setInfo] = useState("");
  const [users, setUsers] = useState([]);
  const url = `https://api.github.com/search/users?q=${info}`;

  async function fetchresult(event) {
    event.preventDefault();
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.items);
      setUsers(data.items);
    } catch (error) {
      console.error("you got error");
    }
  }
  function search(event) {
    setInfo(event.target.value);
  }

  return (
    <>
      <UserBar onChange={search} onClick={fetchresult} value={info} />
      <UserList users={users}/>
    </>
  );
}

export default App;
