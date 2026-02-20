import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"
import "./Layout.css"

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-area">
        <Header />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
