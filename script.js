function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <h1>Contador Simple</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// Renderizar el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
