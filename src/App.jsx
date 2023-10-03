import "./App.css";
import RandomOptionSelector from "./components/RandomOptionSelector";

function App() {
  const options = [
    "Muelle Medieval",
    "Ciudad Caída",
    "Bastión Brutal",
    "Suites Sanguinarias",
    "Solar Selénico",
    "Arroyo Amalgama",
    "Bahia Burbujeante",
    "Asentamiento Arbolado",
    "Cantera Cinética",
    "Granja Grandiosa",
    "Ciudad Mega",
    "Aldea Aislada",
    "Termas Tranquilas",
    "Retiro Relajante",
    "Cruce Kenjutsu",
  ];

  return (
    <>
      <div>
        <a href="https://www.fortnite.com/" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png"
            className="logo"
            alt="Fornite logo"
          />
        </a>
      </div>
      <h1>Fornite Random</h1>
      <hr /><br />
      <RandomOptionSelector options={options} />
      <p className="read-the-docs">Developed by Conrado Els</p>
    </>
  );
}

export default App;
