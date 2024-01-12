import { Link, useLoaderData, useNavigation } from "react-router-dom";

const User = () => {
  const user = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div className="main user-page">
      <div className="btn-back">
        <Link to="/users">Back</Link>
      </div>
      <img src={user.img} alt="avatar" />
      <p>
        <b>User:</b> {user.name}
      </p>
      <p>
        <b>Age:</b> {user.age}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
};

export default User;