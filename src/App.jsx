import { Routes, Route } from 'react-router-dom'

import { Header } from './component/Header'
import { Layout } from './container/Layout'

import { Home } from './pages/Home'
import { Character } from './pages/Character'

function App () {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Character/>} />
        <Route path="/comics" element={<div>Comics</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/series" element={<div>Series</div>} />
        <Route path="/stories" element={<div>Stories</div>} />
      </Routes>
    </Layout>
  )
}

export default App
