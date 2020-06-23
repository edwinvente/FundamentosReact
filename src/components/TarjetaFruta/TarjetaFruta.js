import React from 'react'
import styles from './TarjetaFruta.module.css' 

console.log(styles);


class TarjetaFruta extends React.Component{
    state = {
      cantidad: 0,
      background: 'black',
      colorTxt: 'white'
    }
  
    agregar = () => this.setState({ cantidad: this.state.cantidad + 1 })
  
    restar = () =>{
      this.setState({ cantidad: this.state.cantidad - 1 })
    }
  
    limpiar = () =>{
      this.setState({ cantidad: this.state.cantidad = 0 })
    }

    spreadInArray = () =>{

      const FrutasVerdes = [
        'Kiwi',
        'Manzana',
        'Pera'
      ]

      const FrutasRojas = [
        'Mora',
        'Fresa',
        'sandia'
      ]

      const Frutas = [
        1,
        2,
        ...FrutasVerdes,
        'Aguacate',
        ...FrutasRojas,
        'NINJA **'
      ]

      /* FrutasVerdes.push('Aguacate')
      const Frutas = FrutasVerdes.concat(FrutasRojas) */

      console.log(Frutas);
      

    }

    objectassingF = () =>{

      const perfil = {
        name:'Edwin',
        info:{
          direccion:'la direccion...'
        }
      }

      const region = {
        twitter:'@somoscreandola',
        info:{
          coordenadas:'las coordenadas...'
        }
      }

      const social = {
        pais:'Colombia',
        name: 'Ninja Pro'
      }

      const resultado  = {
        ...region,
        ...perfil,
        ...social,
        info:{
          ...perfil.info,
          ...region.info
        }
      }

      console.log(resultado);

      /* const resultado = Object.assign(
        {}, 
        perfil, 
        region, 
        social,
        {
          info: Object.assign(
            {},
            perfil.info,
            region.info
          )
        }
      ) */
      //operador spread
    }
  
    render(){

      this.spreadInArray()

      const hasItems = this.state.cantidad > 0
      const activeClass = hasItems ? styles['card-active']: ''
      const clases = styles.card + ' ' + activeClass
      /* const clases = `card ${activeClass}` */

      //TarjetaFruta
      //TarjetaFruta TarjetaFruta-activa

      return (
        <div className={clases}>
          <h1>{this.props.name}</h1>
          <p>$ {this.props.price} </p>
          <p>Cantidad: {this.state.cantidad} </p>
          <p>
              Precio: $
              {
                  this.state.cantidad * this.props.price
              }
          </p>
          <button 
            onClick={this.agregar}>
              Agregar
          </button>
          <button 
            onClick={this.restar}>
              restar
          </button>
          <button 
            onClick={this.limpiar}>
              Limpiar
          </button>
        </div>
      )
    }
  }
  
  export default TarjetaFruta