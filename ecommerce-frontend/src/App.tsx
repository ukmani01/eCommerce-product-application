import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"


const App: React.FC = () => {





  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>

  )
}

export default App