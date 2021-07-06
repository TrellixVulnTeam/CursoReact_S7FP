import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Alan"
  let auth = false
  let estaciones = ["primavera","verano","otoño","invierno"]
  return (
    
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor = "nombre"> nombre </label>
          <input type="text" id="nombre"/>
          <h1>{nombre}</h1>
          <p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
          <ul>
            {estaciones.map((el, index)=>(
              <li key={index}>{el}</li>
            ))}
          </ul>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
