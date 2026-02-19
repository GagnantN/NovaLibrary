import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importations des pages
import Home from "./pages/utilisateur_non_connecter/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
        </main>
       </div>
    </BrowserRouter>
  )
}

export default App
