import React, {Component} from 'react'

const Title = ({uiColor, children}) => {
    
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    return(
        <h1 style={styles}>
            {children}
        </h1> 
    )

}

class PropChildren extends Component{ 
    
    state = {
        uiColor:'purple'
    }
    
    render(){

        const {uiColor} = this.state

        return(
           <div>
               <Title
                uiColor={uiColor}
                text="Ninja pro 2"
               >
                   Súper <em>Ninja Pro</em>
               </Title>
           </div>
        )
    }
}

export default PropChildren