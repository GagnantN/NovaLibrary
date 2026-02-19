import React from "react";
import './Home.css';
import Sidebar from '../../../styles/Sidebar/Sidebar'
import Header from '../../../styles/Header/Header'

const Home: React.FC = () => {
    return (
        /* Importation de la Sidebar */
        
        <div className="layout">
            <Sidebar />
            <Header />
            {/* ZONE PRINCIPALE */}
            <div className="main-area"></div>
            {/* CONTENU */}
            <main className="content">
            <h1>Bienvenue sur Nova Library</h1>
            <p>Ton contenu apparaîtra ici.</p>
            </main>
        </div>
    )
}

export default Home;