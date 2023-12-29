import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Sidebar from "./layouts/Sidebar/Sidebar";
import Footer from "./layouts/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container grid-container">
        <div className="wrapper">
          <Main />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;