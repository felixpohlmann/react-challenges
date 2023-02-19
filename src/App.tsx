import { Routes, Route, Link, useLocation } from "react-router-dom"
import "./App.sass"

import ArrayChallenge from "./components/ArrayChallenge"

function App() {

  const menuLinks = [
    {
      name: "Array Challenge",
      path: "/array-challenge",
      component: <ArrayChallenge />
    }
  ]

  const location = useLocation()

  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          {menuLinks.map(e => (
            <Route path={e.path} key={e.name} element={e.component} />
          ))}
          <Route path="/" element={
            <div className="app__menu">
              <ul>
                {menuLinks.map(e => (
                  <li key={e.path}>
                    <Link to={e.path} key={e.name}>{e.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          } />
        </Routes>
      </div>
      <div className="app__footer">
        {location.pathname !== "/" ?
          <Link to="/">Home</Link>
          : null
        }
      </div>
    </div>
  )
}

export default App
