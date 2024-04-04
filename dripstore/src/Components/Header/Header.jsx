import "./Header.css"
// import Logo from ""

function Header() {
    return (
      <>
      <div className="Header">
        <div className="Cabecalho">
          <h1>DigitalStore</h1>
          <input type="search" name="search" id="seach" placeholder="Pesquisar produto..."/>
          <div className="button">
            <a href="">Cadastre-se</a>
            <button className="entrarBtn">Entrar</button>
          </div>
        </div>
        <div className="Menu">
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Categorias</a>
          <a href="">Meus Pedidos</a>
        </div>
        </div>
      </> 
    )
  }
  
  export default Header
  