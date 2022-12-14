import "../styles/App.scss";
import { useEffect, useState } from "react";
import getFromApi from "../services/api";

function App() {
  //Variables de estado
  const [quotes, setQuotes] = useState([]); //si pongo [quotesData] estoy metiendo un array dentro de un array
  const [addCharacter, setAddCharacter] = useState("");
  const [addQuote, setAddQuote] = useState("");
  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("all");

  //Coger los datos de la API
  useEffect(() => {
    getFromApi().then((data) => {
      setQuotes(data);
    });
  }, []);

  //Eventos
  const handleClick = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, { quote: addQuote, character: addCharacter }]); //para que sea como data.json
    setAddQuote("");
    setAddCharacter("");
  };

  const handleQuote = (ev) => {
    setAddQuote(ev.target.value);
  };

  const handleCharacter = (ev) => {
    setAddCharacter(ev.target.value);
  };

  //Filtros

  const handleFilterQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  //Renderizado
  const html = quotes
    .filter((item) => {
      return item.quote.toLowerCase().includes(filterQuote.toLowerCase());
    })
    .filter((item) => {
      if (filterCharacter === "all") {
        return true;
      } else {
        return item.character === filterCharacter;
      }
    })
    .map((item, index) => {
      return (
        <li className="main__li" key={index}>
          {item.quote} - {item.character}
        </li>
      );
    });

  //Página
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Frases de Friends</h1>
      </header>
      <main className="main">
        <form className="main__form">
          <label className="main__label" htmlFor="quote">
            Filtrar por frase:
          </label>
          <input
            className="main__input"
            type="text"
            name="quote"
            id="quote"
            onChange={handleFilterQuote}
            value={filterQuote}
          ></input>
          <label className="main__label" htmlFor="character">
            Filtrar por personaje:
          </label>
          <select
            className="main__select"
            name="character"
            id="character"
            onChange={handleFilterCharacter}
            value={filterCharacter}
          >
            <option value="all">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Rachel">Rachel</option>
            <option value="Chandler">Chandler</option>
            <option value="Monica">Monica</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Joey">Joey</option>
          </select>
        </form>
        <ul className="main__list">{html}</ul>
        <h2 className="main__title">Añadir una nueva frase:</h2>
        <form className="main__form">
          <label className="main__label" htmlFor="newQuote">
            Frase:
          </label>
          <input
            className="main__input"
            type="text"
            name="newQuote"
            id="newQuote"
            onChange={handleQuote}
            value={addQuote}
          ></input>
          <label className="main__label" htmlFor="newCharacter">
            Personaje:
          </label>
          <input
            className="main__input"
            type="text"
            name="newCharacter"
            id="newCharacter"
            onChange={handleCharacter}
            value={addCharacter}
          ></input>
          <button className="main__button" onClick={handleClick}>
            Añadir
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
