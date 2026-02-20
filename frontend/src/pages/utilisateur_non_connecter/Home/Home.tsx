import React from "react";
import './Home.css';
import Sidebar from '../../../styles/Sidebar/Sidebar'
import Header from '../../../styles/Header/Header'

const Home: React.FC = () => {
    return (    
        <div className="layout">
            {/* IMPORTATION SIDEBAR */}
            <Sidebar />
            {/* ZONE PRINCIPALE */}
            <div className="main-area">
                <Header />
                {/* CONTENU */}
                <main className="content">
                    <h1>Bienvenue sur Nova Library</h1>
                    <p>Ton contenu apparaîtra ici.</p>
                </main>
            </div>
        </div>
    )
}

export default Home;