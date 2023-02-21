import { BrowserRouter, Link } from "react-router-dom";
import "../styles/nav.css";

const navValues = [
  { id: 1, value: "personajes", path: "/characters" },
  { id: 2, value: "comics", path: "/comics" },
];

export const Nav = () => {
  return (
    <nav>
      <ul>
        {navValues.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="nav" key={item.id}>
              {item.value.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
