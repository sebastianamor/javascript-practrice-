function App() {
  // Texto predeterminado en Markdown
  const defectoMarkdown =` # 見出し H1  
## 見出し H2  

[これはリンクです](https://www.example.com)  

\`インラインコード\`  

\`\`\`  
// コードブロック  
function ejemplo() {  
  console.log("こんにちは、世界！");  
}  
\`\`\`  

- リスト項目 1  
- リスト項目 2  

> これは引用です。  

![代替テキスト](https://via.placeholder.com/150)  

**太字テキスト**  
   ` ;

  const [text, setText] = React.useState(defectoMarkdown); // Estado con el texto predeterminado
  const [count, setCount] = React.useState(0); // Estado para el contador

  const handleChange = (event) => {
    setText(event.target.value); // Actualiza el estado con el valor del textarea
  };

  // Función para convertir el texto a Markdown usando marked.js
  const renderMarkdown = (text) => {
    return { __html: marked.parse(text, { breaks: true }) };
  };

  return (
    <div className="container">
      <div className="toolbar">
        <textarea
          id="editor"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
      <div className="toolbar">
        {/* Vista previa del Markdown convertido a HTML */}
        <div id="preview" dangerouslySetInnerHTML={renderMarkdown(text)}></div>
      </div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

