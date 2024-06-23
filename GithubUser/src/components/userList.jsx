import "./userlist.css";

function UserList({ users }) {
  return (
    <div>
      <h2 className="result">Results:</h2>
      <div className="lists">
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatar_url} alt="" />
              <p className="username">{user.login}</p>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
export default UserList;
