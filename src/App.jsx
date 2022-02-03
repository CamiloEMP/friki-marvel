import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './container/Layout'
import { Home } from './pages/Home'

function App () {
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_APP_BASE_URL}/characters${import.meta.env.VITE_APP_CREDENTIALS_API}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<div>Characters</div>} />
        <Route path="/comics" element={<div>Comics</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/series" element={<div>Series</div>} />
        <Route path="/stories" element={<div>Stories</div>} />
      </Routes>
    </Layout>
  )
}

export default App
