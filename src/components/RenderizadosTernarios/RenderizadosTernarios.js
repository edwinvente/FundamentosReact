import React from 'react'

const Saludo = (props) =>{
    return(
        <div>
            <div>
                {props.name && <span> {props.name} </span>}
            </div>
            {props.saludo
                ? (
                    <div>
                        <h2>Hola,</h2>
                    </div>
                ) :
                (
                    <div>
                        <h2>Wops, No hay saludos para ti</h2>
                    </div>
                )
            }
        </div>
    )
}

const RenderizadosTernarios = () => (
    <div>
        <h1>Renderizados ternarios</h1>
        <Saludo saludo name="Ninja in React" />
    </div>
)

export default RenderizadosTernarios