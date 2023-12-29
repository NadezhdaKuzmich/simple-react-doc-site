import "./Main.css";
import Articles from "../../components/Articles";
import materials from "../../data/materials.json";

const Main = () => {
  return (
    <main className="main">
      <Articles data={materials} />
    </main>
  );
};

export default Main;