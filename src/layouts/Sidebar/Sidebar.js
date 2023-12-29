import "./Sidebar.css";
import materials from "../../data/materials.json";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {materials.map((item, idx) => (
            <li key={idx}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;