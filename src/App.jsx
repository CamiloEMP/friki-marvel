import { Routes, Route } from 'react-router-dom'

import { Layout } from './container/Layout'
import { Header } from './components/Header'

import { MoreInfo } from './pages/MoreInfo'
import { Characters } from './pages/Characters'
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
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterId />} />
        <Route path="/characters/:characterId/:category" element={<MoreInfo />} />
        <Route path="/comics" element={<Comics/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/comics/:id" element={<InformationID category="comics"/>} />
        <Route path="/events/:id" element={<InformationID category="events"/>} />
        <Route path="/series/:id" element={<InformationID category="series"/>} />
        <Route path="/comics/:id/:category" element={<MoreInfo />} />
        <Route path="/events/:id/:category" element={<MoreInfo />} />
        <Route path="/series/:id/:category" element={<MoreInfo />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
  )
}

export default App
