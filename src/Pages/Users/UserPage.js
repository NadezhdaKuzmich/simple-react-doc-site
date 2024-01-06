import { Link, useLoaderData, useNavigation } from "react-router-dom";

const User = () => {
  const user = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading!</h1>;
  }

  return (
    <div className="main user-page">
      <div>
        <Link to="/users">Back</Link>
      </div>
      <img src={user.img} alt="avatar" />
      <h2>User: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;