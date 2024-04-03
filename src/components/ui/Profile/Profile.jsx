import "./Profile.css";
import { Button } from "../button";
import Header from "../Header/Header";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Profile() {
  return (
    <>
      <div className="container-home">
        <Header />
        <div className="container-main">
          <div className="container-profile">
            <div className="myProfile">
              <img src="/imgs/perfil.png" alt="myProfile" />
            </div>
            <div className="continer-info">
              <h3>Olá, eu sou o</h3>
              <h1>Pedro Oliveira</h1>
              <h2>Desenvolvedor Full-Stack</h2>
              <div className="container-button">
                <Button>Download CV</Button>
                <Button>Contato</Button>
              </div>
              <div className="container-links">
                <FaLinkedin />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
