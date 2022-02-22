import { Routes, Route } from 'react-router-dom'

import { Layout } from './container/Layout'
import { Header } from './components/Header'

import { Home } from './pages'
import { MoreInfo } from './pages/MoreInfo'
import { Character } from './pages/Character'
import { Series } from './pages/Series'
import { Comics } from './pages/Comics'
import { Events } from './pages/Events'

import { CharacterId } from './components/CharacterID'
import { InformationID } from './components/InformationID'
import { NotFound } from './components/NotFound'

function App () {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Character />} />
        <Route path="/characters/:characterId" element={<CharacterId />} />
        <Route path="/characters/:characterId/:category" element={<MoreInfo />} />
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comics/:id" element={<InformationID category="comics"/>} />
        <Route path="/comics/:id/:category" element={<MoreInfo />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events/:id" element={<InformationID category="events"/>} />
        <Route path="/events/:id/:category" element={<MoreInfo />} />
        <Route path="/series" element={<Series/>} />
        <Route path="/series/:id" element={<InformationID category="series"/>} />
        <Route path="/series/:id/:category" element={<MoreInfo />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
  )
}

export default App
