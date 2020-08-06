import React, {useState, useRef} from 'react'
import propTypes from 'prop-types'
import arrowImg from './img/arrow.svg'

const Acordion = ({ title, content, bgColor }) =>{
    
    const [isExpanded, setExpanded] = useState(false)

    const contentRef = useRef()

    const panelStyles = {
        background: bgColor,
        color: '#FFF',
        padding:'0.5em 1em',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        userSelect: 'none'
    }

    const contentStyles = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow:'hidden',
        transition: 'all 350ms ease-out',
        border:'1px solid ' + bgColor,
        padding: isExpanded ? '1em 0.5em' : '0 0.5em'
    }

    const imageStyles = {
        width:12,
        transition: 'transform 850ms ease',
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
    }

    const toggle = () => setExpanded(!isExpanded)
    
    return(
        <div>
            <div 
                onClick={toggle}
                style={panelStyles}
            >
                <span>{title}</span>
                <img 
                    src={arrowImg}
                    alt='flecha'
                    style={imageStyles}
                />
            </div>
            <div 
                style={contentStyles} 
                ref={contentRef}
            >
                {content}
            </div>
        </div>
    )
}

Acordion.defaultProps = {
    title: '',
    content: 'Sin contenido inicial...',
    bgColor: 'purple'
}

Acordion.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    bgColor: propTypes.string,
}

export default Acordion