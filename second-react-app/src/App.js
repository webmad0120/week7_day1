import React from 'react'
import User from './components/user/User'
import ReactPlayer from 'react-player'

import Drink from './components/drink/Drink'

import './App.css'

function App() {
  return (
    <main>
      <section className="users">
        <h1>Listado de usuarios</h1>
        <User firstName="Germán" lastName="Álvarez" age="33" />
        <User firstName="Sara" lastName="Garzón" age="33" />
      </section>
      <section className="drinks">
        <h1>Bebidas disponibles</h1>
        <Drink name="Kas" sugar="20" carbs="736" kcal="74" />
        <Drink name="Coca-cola" sugar="27" carbs="746" kcal="90" />
      </section>
      <section className="ads">
        <h1>Anuncio</h1>
        <ReactPlayer url='https://www.youtube.com/watch?v=PD-UFKY9MP8' muted playing />
      </section>
    </main>
  );
}

export default App;
