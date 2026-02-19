import "./Header.css"

function Header() {
    return (
         <header className="header">
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
          />

          <div className="auth-buttons">
            <button className="btn-login">Connexion</button>
            <button className="btn-register">Inscription</button>
          </div>
        </header>
    )
}

export default Header