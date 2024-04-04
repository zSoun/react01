import "./Header.css"
// import Logo from ""

function Header() {

    return (
      <>
        <div className="Header">
          <h1>DigitalStore</h1>
          <input type="search" name="search" id="seach" />
          <div>
            <a href="">Cadastre-se</a>
            <button className="entrarBtn">Entrar</button>
          </div>
        </div>
          
      </>
    )
  }
  
  export default Header
  