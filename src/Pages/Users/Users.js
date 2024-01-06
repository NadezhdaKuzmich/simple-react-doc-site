import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="main">
      <h2>Users</h2>
      <ul className="users">
        <li>
          <Link to="/users/walles">John Walles</Link>
        </li>
        <li>
          <Link to="/users/beanit">Jim Beanit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;