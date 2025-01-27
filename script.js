function App() {
  const [text, setText] = React.useState(""); // Estado para el texto ingresado en Markdown
  const [count, setCount] = React.useState(0); // Estado para el contador

  const handleChange = (event) => {
    setText(event.target.value); // Actualiza el estado del texto
  };

  // Convierte el texto Markdown a HTML usando marked
  const renderMarkdown = () => {
    return { __html: (text) }; // marked(text) convierte Markdown a HTML
  };

  return (
    <div className="container">
      <div className="toolbar">
        <textarea
          id="editor"
          value={text} // Vincula el valor del textarea al estado
          onChange={handleChange} // Llama a la función al cambiar el texto
        ></textarea>
      </div>
      <hr />
      <div className="toolbar">
        {/* Usa dangerouslySetInnerHTML para renderizar el HTML convertido */}
        <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
      </div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// Renderizar el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));
