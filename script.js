function App() {
  // Texto predeterminado con ejemplos de Markdown
  const defaultMarkdown = `# Encabezado H1
## Subencabezado H2

[Este es un enlace](https://www.example.com)

\`Código en línea\`

\`\`\`
// Bloque de código
function ejemplo() {
  console.log("Hola, mundo!");
}
\`\`\`

- Elemento de lista 1
- Elemento de lista 2

> Esto es una cita en bloque.

![Texto alternativo](https://via.placeholder.com/150)

**Texto en negrita**
`;

  const [text, setText] = React.useState(defaultMarkdown); // Estado con el texto predeterminado
  const [count, setCount] = React.useState(0); // Estado para el contador

  const handleChange = (event) => {
    setText(event.target.value); // Actualiza el estado con el valor del textarea
  };

  // Función para convertir el texto a Markdown usando marked.js
  const renderMarkdown = (text) => {
    return { __html: marked.parse(text) }; // marked.parse convierte el texto a HTML
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
        {/* Usamos dangerouslySetInnerHTML para renderizar el Markdown como HTML */}
        <div id="preview" dangerouslySetInnerHTML={renderMarkdown(text)}></div>
      </div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// Renderizar el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));

