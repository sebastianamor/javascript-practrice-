function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <div className="toolbar"  >
      <textarea  id="editor" ></textarea>
        </div>
      <hr></hr>
      <div  className="toolbar"   >
      <p id="preview"></p>
       </div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// Renderizar el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
