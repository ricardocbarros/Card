function App() {
  const eventos = [
    {
      nome: "Evento 1",
      data: "01/01/24", 
      imagem: "https://images.app.goo.gl/bsJjRNuXQwUaoGPy9"
    },
    {
      nome: "Evento 2",
      data: "01/01/25",
      imagem: "https://images.app.goo.gl/R2ojmTLE9JpgqGzH8"
    },
    {
      nome: "Evento 3",
      data: "01/01/26",
      imagem: "https://images.app.goo.gl/k483hGmFH46QgnkR8" 
    },
  ]

  const grid = {
    display: "flex",
    gap: "20px"
  }

  return (
    <>
      <h2>Lista de Eventos</h2>
      <div style={grid}>
      {eventos.map((evento)=> (
          <div style={{border: "1px solid black"}}>
            <h3>{evento.nome}</h3>
            <img style={{maxWidth: "300px"}} src={evento.img} />
            <p>{evento.data}</p>
          </div>
      ))}
      </div>
    </>
  )
}

export default App
