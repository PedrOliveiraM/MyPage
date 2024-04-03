import "./App.css";
import About from "./components/ui/About/About";
import Header from "./components/ui/Header/Header";
import Profile from "./components/ui/Profile/Profile";
import Techs from "./components/ui/Techs/Techs";

function App() {
  return (
    <>
      <div className="container-main">
        <section className="container-header">
          <Header />
        </section>
        <section className="container-profile">
          <Profile />
        </section>
        <section className="container-about">
          <About />
        </section>
        <section className="container-techs">
          <Techs />
        </section>
      </div>
    </>
  );
}

export default App;
