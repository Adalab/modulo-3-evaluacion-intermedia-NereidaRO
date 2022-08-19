import "../styles/App.scss";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";
import quotes from "../services/data.json";

function App() {
  //Variables de estado

  //Eventos

  //Página
  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form>
          <label htmlFor="quote">Filtrar por frase:</label>
          <input type="text" name="quote" id="quote"></input>
          <label htmlFor="character">Filtrar por personaje:</label>
          <select name="character" id="character">
            <option value="Ross">Ross</option>
            <option value="Rchel">Rachel</option>
            <option value="Chandler">Chandler</option>
            <option value="Monica">Monica</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Joey">Joey</option>
          </select>
        </form>
        <ul>{html}</ul>
        <h2>Añadir una nueva frase:</h2>
        <form>
          <label htmlFor="newQuote">Frase:</label>
          <input type="text" name="newQuote" id="newQuote"></input>
          <label htmlFor="newCharacter">Personaje:</label>
          <input type="text" name="newCharacter" id="newCharacter"></input>
          <button>Añadir</button>
        </form>
      </main>
    </div>
  );
}

export default App;
