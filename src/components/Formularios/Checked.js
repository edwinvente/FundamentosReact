import React, {Component} from 'react'

class Checked extends Component{

    state = {
        active: true
    }

    handleChecked = (e) =>{
        this.setState({active: e.target.checked})
    }
    
    render(){

        const { active }  = this.state

        return(
            <div>
                {active && (
                    <h1>Iput of type checked</h1>
                )}
                
                <input 
                    type="checkbox"
                    checked={active}
                    onChange={this.handleChecked}
                />
            </div>
        )
    }
}

export default Checked