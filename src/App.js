import React from 'react';
import { AddTowedos } from './screens/components/Towedo/AddTowedos.jsx';
import { Header } from './screens/components/Header.jsx';
import TowedoList from './screens/components/Towedo/TowedoList.jsx';
import Context from './context'

function App() {

  const [towedos, setTowedos] = React.useState([
  ])

  const removeTowedo = (id) => {
    setTowedos(towedos.filter(towedo => towedo.id !== id))
  }

  const addTowedo = (fieldOne,fieldTwo,fieldThree,fieldFour) => {
    setTowedos(towedos.concat([
      {
        id: Date.now(),
        fieldOne,
        fieldTwo,
        fieldThree,
        fieldFour,

      }
  ]))
  }

  return (
    <Context.Provider value={{ removeTowedo }}>
    <div>
      <Header />
        <div className="container">
            <AddTowedos onCreate={addTowedo} />
            {towedos.length ? (
              <TowedoList towedos={towedos}/>
            ) : (
              <h2 id="nt">No towedos!</h2>
)}
        </div>
    </div>
    </Context.Provider>
  );
}

export default App;
