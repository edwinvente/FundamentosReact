import React, { Component } from 'react';
import './App.css';
import TarjetaFruta from './components/TarjetaFruta';
import Mutacion from './components/Mutacion'
import Spread from './components/Spread'
import EventoMouse from './components/EventoMouse'
import EventoInput from './components/EventoInput'
import DifNativoSintetico from './components/DifNativoSintetico'
import ConservarEvento from './components/ConservarEvento'
import EventoPersonalizadoHijoalPadre from './components/EventoPersonalizadoHijoalPadre'
import RenderizadosTernarios from './components/RenderizadosTernarios'
import InerHtml from './components/InerHtml'
import PropChildren from './components/PropChildren'
import ElementSinFragment from './components/ElementSinFragment'
import Portal from './components/Portal'
import PropTypes from './components/PropTypes'
import Iteraciones from './components/Iteraciones'
import Ref from './components/Refs'
import Formularios from './components/Formularios'
import DevTools from './components/DevTools'
import Error from './components/Errores'
import Http from './components/HttpRequest'
import Constructor from './components/CiclosDeVida'

class App extends Component{
  
  state = {
    hombres: 10,
    mujeres: 15
  }

  render(){
    
    const otrosDatos = {
      raza: 'tropical',
      color: 'verde',
      peleasNocturnas: 300,
      name: "Creándola" 
    }

    return(
      <div>
        <Constructor/>
        {/*
        <Constructor/>
        <Http/>
        <Error/>
        <DevTools/>
        <Formularios/>
        <Ref/>
        <Iteraciones/>
        <PropTypes/>
        <Portal/>
        <ElementSinFragment/>
        <PropChildren/>
        <InerHtml/>
        <RenderizadosTernarios />
        <EventoPersonalizadoHijoalPadre />
        <ConservarEvento />
        <DifNativoSintetico />
        <EventoInput />
        <EventoMouse />
        <Spread 
          name = 'Garfield'
          age = '2 años'
          {...otrosDatos}
          {...this.state}
        />
        <Mutacion />
        <TarjetaFruta name="Sandia" price={2500} />
        <TarjetaFruta name="Mango" price={3200} />
        <TarjetaFruta name={`${Frutaexotica}`} price={1500} /> */}
      </div>
    )

  }

}


export default App;
