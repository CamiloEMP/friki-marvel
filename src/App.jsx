import { Routes, Route } from 'react-router-dom'

import { Layout } from './container/Layout'
import { Header } from './component/Header'
import { CharacterId } from './component/Character/CharacterId'

import { Home } from './pages/Home'
import { Character } from './pages/Character'
import { CharacterEvents } from './component/Character/CharacterEvents'
import { CharacterStories } from './component/Character/CharacterStories'
import { CharacterComics } from './component/Character/CharacterComics'
import { CharacterSeries } from './component/Character/CharacterSeries'

function App () {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Character/>} />
        <Route path="/characters/:characterId" element={<CharacterId />} />
        <Route path="/characters/:characterId/events" element={<CharacterEvents />} />
        <Route path="/characters/:characterId/comics" element={<CharacterComics />} />
        <Route path="/characters/:characterId/series" element={<CharacterSeries />} />
        <Route path="/characters/:characterId/stories" element={<CharacterStories />} />
        <Route path="/comics" element={<div>Comics</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/series" element={<div>Series</div>} />
        <Route path="/stories" element={<div>Stories</div>} />
      </Routes>
    </Layout>
  )
}

export default App
