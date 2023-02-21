import "../styles/header.css";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-nav">
        <Nav />
      </div>
    </div>
  );
};
