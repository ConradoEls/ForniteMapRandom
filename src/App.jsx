import "./App.css";
import RandomOptionSelector from "./components/RandomOptionSelector";

function App() {
  const options = [
    "Chiringuito Chatarra",
    "Lomas Lúgubres",
    "Parque Placentero",
    "Balsa Botín",
    "Pisos Picados",
    "Ribera Repipi",
    "Caserío Colesterol",
    "Túneles Tortuosos",
    "Industrias Inodoras",
    "Sociedad Sibarita",
    "Templo Tomate",
    "Socavón Soterrado",
    "Señorío de la Sal",
    "Latifundio Letal",
    "Aterrizaje Afortunado",
    "Carretes Comprometidos",
    "Alameda Aullante",
    "Soto Solitario",
    "Ciudad Comercio",
    "Oasis Ostentoso",
  ];

  return (
    <>
      <div>
        {/* <a href="https://www.fortnite.com/" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png"
            className="logo"
            alt="Fortnite logo"
          />
        </a> */}
      </div>
      <h1>Fortnite Random</h1>
      <hr /><br />
      <RandomOptionSelector options={options} />
      <p className="read-the-docs">Developed by Conrado Els</p>
    </>
  );
}

export default App;
