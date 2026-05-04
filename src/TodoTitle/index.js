const estilosTitle = {
    fontSize: "1.2rem",
    fontWeight: "900",
    margin: "0",
    paddingBottom: "5px",
    fontFamily: "Libre Baskerville, serif"
}

const estilosSubTitle = {
    fontSize: "0.8rem",
    margin: "0",
    fontStyle: "italic",
    fontFamily: "'DM Sans', sans-serif",
    color: "#666666"
}

function TodoTitle({titulo, subtitulo}) {
  // console.log(titulo);
  
  return (
    <div>
      <h1 style={estilosTitle}> {titulo} </h1>
      <p style={estilosSubTitle}> {subtitulo} </p>
    </div>
  );
}

export { TodoTitle };
