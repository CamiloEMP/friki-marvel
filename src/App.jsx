import { Routes, Route } from 'react-router-dom'

import { Layout } from './container/Layout'
import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Comics } from './pages/Comics'
import { Character } from './pages/Character'
import { Events } from './pages/Events'
import { Series } from './pages/Series'
import { CharacterId } from './pages/Character/CharacterID'
import { ComicId } from './pages/Comics/ComicID'
import { EventsId } from './pages/Events/EventsID'
import { SeriesId } from './pages/Series/SeriesID'

import { MoreInfo } from './pages/MoreInfo'

function App () {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Character/>} />
        <Route path="/characters/:characterId" element={<CharacterId />} />
        <Route path="/characters/:characterId/:category" element={<MoreInfo />} />
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comics/:id" element={<ComicId/>} />
        <Route path="/comics/:id/:category" element={<MoreInfo />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events/:id" element={<EventsId/>} />
        <Route path="/events/:id/:category" element={<MoreInfo />} />
        <Route path="/series" element={<Series/>} />
        <Route path="/series/:id" element={<SeriesId/>} />
        <Route path="/series/:id/:category" element={<MoreInfo />} />
      </Routes>
    </Layout>
  )
}

export default App
