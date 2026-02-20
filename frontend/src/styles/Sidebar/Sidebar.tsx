import { useState } from "react";
import {
  FaHome,
  FaBook,
  FaMusic,
  FaFilm,
  FaTv,
  FaGamepad,
  FaEllipsisV,
} from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";

import "./Sidebar.css";
import Logo from "../../assets/Logo-Nova.png";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="sidebar">
      <img src={Logo} alt="Logo Nova Library" className="logo-img" />

      <nav>
        {/* ===== ACCUEIL ===== */}
        <button className="sidebar-btn">
          <FaHome />
          <span>Accueil</span>
        </button>

        {/* ===== BIBLIOTHÈQUE ===== */}
        <div className="menu-section">
          <button
            className="sidebar-btn"
            onClick={() => toggleMenu("bibli")}
          >
            <FaBook />
            <span>Bibliothèque</span>
            <FaEllipsisV className="menu-icon" />
          </button>

          {openMenu === "bibli" && (
            <div className="submenu">
              <button><FaBook /> Livres</button>
              <button><LuFileSearch /> Revues / magazines</button>
              <button><FaTv /> Documents pédagogiques</button>
            </div>
          )}
        </div>

        {/* ===== MÉDIATHÈQUE ===== */}
        <div className="menu-section">
          <button
            className="sidebar-btn"
            onClick={() => toggleMenu("media")}
          >
            <FaBook />
            <span>Médiathèque</span>
            <FaEllipsisV className="menu-icon" />
          </button>

          {openMenu === "media" && (
            <div className="submenu">
              <button><FaMusic /> Musique</button>
              <button><FaFilm /> Films</button>
              <button><FaTv /> Séries</button>
              <button><FaGamepad /> Jeux vidéo</button>
            </div>
          )}
        </div>

        {/* ===== BIBLIOTHÈQUE SCOLAIRE ===== */}
        <div className="menu-section">
          <button
            className="sidebar-btn"
            onClick={() => toggleMenu("school")}
          >
            <FaBook />
            <span>Bibliothèque scolaire</span>
            <FaEllipsisV className="menu-icon" />
          </button>

          {openMenu === "school" && (
            <div className="submenu">
              <button><FaBook /> Livres éducatifs</button>
              <button><FaFilm /> DVD pédagogiques</button>
            </div>
          )}
        </div>

        {/* ===== ASSOCIATIONS ===== */}
        <div className="menu-section">
          <button
            className="sidebar-btn"
            onClick={() => toggleMenu("asso")}
          >
            <FaBook />
            <span>Associations culturelles</span>
            <FaEllipsisV className="menu-icon" />
          </button>

          {openMenu === "asso" && (
            <div className="submenu">
              <button><FaMusic /> Musique</button>
              <button><FaFilm /> Films</button>
              <button><FaBook /> Archives</button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
