import React, {useState} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'
import './Carrousel.css'

const Carrususel = ({ images }) =>{

    const [activeIndex, setActiveIndex] = useState(0)

    const atras = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }else{
            setActiveIndex(images.length - 1)
        }
    }
    
    const adelante = () => {
        if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1)
        }else{
            setActiveIndex(0)
        }
    }

    return(
        <div className='Carrousel'>
            <div className='Carrousel_Buttons'>
                <button onClick={atras}>
                    atras
                </button>
                <button onClick={adelante}>
                    adelante
                </button>
            </div>

            <TransitionGroup>
                <CSSTransition
                    timeout={2000}
                    classNames='slide'
                    key={activeIndex}
                >
                    <img 
                        src={images[activeIndex]}
                        alt='imagen'
                        className='Carrousel_Img'
                    />
                </CSSTransition>
            </TransitionGroup>

        </div>
    )
}

Carrususel.defaultProps = {
    images: []
}

Carrususel.propTypes = {
    images: propTypes.arrayOf(
        propTypes.string
    )
}

export default Carrususel