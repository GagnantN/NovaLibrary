import { FaHome, FaBook, FaUser } from 'react-icons/fa'
import "./Sidebar.css"

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">Nova</h2>

            <nav>
            <button className="sidebar-btn">
                <FaHome />
                <span>Accueil</span>
            </button>

            <button className="sidebar-btn">
                <FaBook />
                <span>Bibliothèque</span>
            </button>

            <button className="sidebar-btn">
                <FaUser />
                <span>Profil</span>
            </button>
            </nav>
        </aside>
    )
}

export default Sidebar