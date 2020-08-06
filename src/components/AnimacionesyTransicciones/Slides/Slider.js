import React, { useState, useEffect } from 'react'
import './Slides.css'

const Slider = ({ images }) =>{

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
    
        const tick = setInterval(() => {
            if (activeIndex < images.length - 1) {
                setActiveIndex(activeIndex + 1)
            }else{
                setActiveIndex(0)
            }
        }, 5000);

        return () => clearInterval(tick)

    }, [activeIndex, images.length]);

    return (
        <div className='Slide'>
            <div className='Slide_Container'>
                {images.map((image, index) => (
                    <img 
                        src={image.src}
                        alt={image.title}
                        className={ 
                            index === activeIndex
                            ? 'Slide_Container_Img animaShow'
                            : 'Slide_Container_Img animaHide'
                        }
                    />
                ))}
                <div className='Slide_Container_Title'>
                    {activeIndex}
                    { images[activeIndex].title }
                </div>
            </div>
        </div>
    )
}

Slider.defaultProps = {
    images: [
        {
          src: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          title: 'El universo el origen'
        },
        {
          src: 'https://images.pexels.com/photos/2521470/pexels-photo-2521470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          title: 'El diseño tambien es arte!'
        },
        {
          src: 'https://images.pexels.com/photos/3018365/pexels-photo-3018365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          title: 'La fotogradia el mejor camino!'
        },
        {
          src: 'https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'La naturaleza siempre la guia'
        }
      ]
}

export default Slider