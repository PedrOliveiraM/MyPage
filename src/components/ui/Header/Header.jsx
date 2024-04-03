import "./Header.css";
import { FaCode } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <FaCode></FaCode>
          <h3>Pedro.dev</h3>
        </div>

        <ul>
          <li>
            <a href="#about">Sobre min</a>
          </li>
          <li>
            <a href="#tech">Tecnologias</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
