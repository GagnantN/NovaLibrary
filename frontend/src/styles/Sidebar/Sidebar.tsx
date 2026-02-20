import { FaHome, FaBook, FaUser } from 'react-icons/fa'
import "./Sidebar.css"
import Logo from "../../assets/Logo-Nova.png"

function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={Logo} alt='Logo Nova Library'/>

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