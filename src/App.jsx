import { Routes, Route } from 'react-router-dom'

import { Layout } from './container/Layout'
import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Comics } from './pages/Comics'
import { Character } from './pages/Character'
import { Events } from './pages/Events'
import { Series } from './pages/Series'

import { CharacterId } from './pages/Character/CharacterID'
import { CharacterEvents } from './components/Character/CharacterEvents'
import { CharacterStories } from './components/Character/CharacterStories'
import { CharacterComics } from './components/Character/CharacterComics'
import { CharacterSeries } from './components/Character/CharacterSeries'
import { ComicId } from './pages/Comics/ComicID'
import { EventsId } from './pages/Events/EventsID'
import { SeriesId } from './pages/Series/SeriesID'

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
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comics/:id" element={<ComicId/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events/:id" element={<EventsId/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/series/:id" element={<SeriesId/>} />
      </Routes>
    </Layout>
  )
}

export default App
