import Header from "./layouts/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Sidebar from "./layouts/Sidebar/Sidebar";
import Footer from "./layouts/Footer/Footer";
import StateHook from "./pages/StateHookPage/StateHook";
import About from "./pages/About/About";
import Community from "./pages/Community/Community";
import Resources from "./pages/Resources/Resources";
import Users from "./pages/Users/Users";
import User from "./pages/Users/UserPage";
import ErrorPage from "./pages/Error/Error";
import usersData from "./data/users.json";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid-container">
          <div className="wrapper">
            <Outlet />
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const loader = ({ params }) => {
  const user = usersData.filter((usr) => usr.id === params.userId);
  return user[0];
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path="statehooks" element={<StateHook />} />
      <Route path="community" element={<Community />} />
      <Route path="resources" element={<Resources />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<Users />} />
      <Route
        path="users/:userId"
        loader={loader}
        element={<User />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;