import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className="main">
      <h2>Oops!</h2>
      <p>Sorry, this page doesn't exist</p>
    </div>
  );
};

export default ErrorPage;