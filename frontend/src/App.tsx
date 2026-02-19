import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Importations des pages
import Accueil from "./pages/utilisateur_non_connecter/Accueil"

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
              <Route path='/' element={<Accueil />} />
          </Routes>
        </main>
       </div>
    </BrowserRouter>
  )
}

export default App
