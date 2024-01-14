import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalWnd from "../../components/Modal/ModalWnd";
import usersData from "../../users.json";

const Users = () => {
  const [modalState, setModalState] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || usersData
  );
  const [currentId, setCurrentId] = useState(usersData);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const deleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== currentId);
    setUsers(updatedUsers);
    setModalState(false);
  };

  const openModal = (id) => {
    setCurrentId(id);
    setModalState(true);
  };

  return (
    <div className="main">
      <h2>Users</h2>
      <ModalWnd
        visible={modalState}
        handleDestroy={() => setModalState(false)}
        handleDelete={deleteUser}
      />
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <button className="delete-btn" onClick={() => openModal(user.id)}>
              &#x2715;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;